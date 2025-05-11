// Quiz management interface
export function setupQuizManagement(quizManager) {
    const quizEditor = document.getElementById('quiz-editor');
    quizEditor.innerHTML = '';
    
    // Create quiz list or editor
    if (quizEditor.dataset.mode === 'list') {
        createQuizList(quizManager, quizEditor);
    } else {
        createQuizEditor(quizManager, quizEditor);
    }
}

function createQuizList(quizManager, container) {
    // Create title and description
    const header = document.createElement('div');
    header.innerHTML = `
        <h3>Available Quizzes</h3>
        <p>Select a quiz to edit or create a new one.</p>
    `;
    container.appendChild(header);
    
    // Get quiz list
    const quizzes = quizManager.getQuizList();
    
    // Create quiz list
    const listContainer = document.createElement('div');
    listContainer.className = 'quiz-list';
    
    if (quizzes.length === 0) {
        listContainer.innerHTML = '<p>No quizzes available. Create your first quiz!</p>';
    } else {
        quizzes.forEach((quiz, index) => {
            const quizItem = document.createElement('div');
            quizItem.className = 'quiz-item';
            quizItem.innerHTML = `
                <h4>${quiz.title}</h4>
                <p>${quiz.description}</p>
                <p><strong>${quiz.questionCount}</strong> questions</p>
                <div class="quiz-item-actions">
                    <button class="edit-quiz-btn" data-index="${index}">Edit</button>
                    <button class="delete-quiz-btn" data-index="${index}">Delete</button>
                </div>
            `;
            listContainer.appendChild(quizItem);
        });
    }
    
    container.appendChild(listContainer);
    
    // Create new quiz button
    const newQuizBtn = document.createElement('button');
    newQuizBtn.className = 'add-question-btn';
    newQuizBtn.textContent = 'Create New Quiz';
    newQuizBtn.addEventListener('click', () => {
        container.dataset.mode = 'edit';
        container.dataset.editingIndex = '-1';
        setupQuizManagement(quizManager);
    });
    
    container.appendChild(newQuizBtn);
    
    // Add event listeners for edit and delete buttons
    container.querySelectorAll('.edit-quiz-btn').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.index);
            container.dataset.mode = 'edit';
            container.dataset.editingIndex = index.toString();
            setupQuizManagement(quizManager);
        });
    });
    
    container.querySelectorAll('.delete-quiz-btn').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.dataset.index);
            if (confirm('Are you sure you want to delete this quiz?')) {
                quizManager.deleteQuiz(index);
                setupQuizManagement(quizManager);
            }
        });
    });
}

function createQuizEditor(quizManager, container) {
    const editingIndex = parseInt(container.dataset.editingIndex);
    let quiz = { title: '', description: '', questions: [] };
    
    if (editingIndex >= 0 && editingIndex < quizManager.quizzes.length) {
        quiz = quizManager.quizzes[editingIndex];
    }
    
    // Create quiz metadata inputs
    const metadataContainer = document.createElement('div');
    metadataContainer.className = 'quiz-metadata';
    metadataContainer.innerHTML = `
        <div class="form-group">
            <label for="quiz-title">Quiz Title:</label>
            <input type="text" id="quiz-title" value="${quiz.title}" placeholder="Enter quiz title">
        </div>
        <div class="form-group">
            <label for="quiz-description">Description:</label>
            <textarea id="quiz-description" placeholder="Enter quiz description">${quiz.description}</textarea>
        </div>
    `;
    container.appendChild(metadataContainer);
    
    // Create questions container
    const questionsContainer = document.createElement('div');
    questionsContainer.className = 'questions-container';
    container.appendChild(questionsContainer);
    
    // Add existing questions or create a blank one
    if (quiz.questions.length > 0) {
        quiz.questions.forEach((question, index) => {
            addQuestionEditor(questionsContainer, question, index);
        });
    } else {
        addQuestionEditor(questionsContainer);
    }
    
    // Add new question button
    const addQuestionBtn = document.createElement('button');
    addQuestionBtn.className = 'add-question-btn';
    addQuestionBtn.textContent = 'Add Question';
    addQuestionBtn.addEventListener('click', () => {
        addQuestionEditor(questionsContainer);
    });
    
    container.appendChild(addQuestionBtn);
    
    // Add back to list button
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back to Quiz List';
    backBtn.addEventListener('click', () => {
        container.dataset.mode = 'list';
        setupQuizManagement(quizManager);
    });
    
    container.appendChild(backBtn);
}

function addQuestionEditor(container, question = null, questionIndex = null) {
    const index = questionIndex !== null ? questionIndex : container.children.length;
    
    const questionEditor = document.createElement('div');
    questionEditor.className = 'question-editor';
    questionEditor.dataset.index = index;
    
    // Question text
    const questionText = question ? question.text : '';
    questionEditor.innerHTML = `
        <h4>Question ${index + 1}</h4>
        <textarea class="question-text" placeholder="Enter question text">${questionText}</textarea>
        <div class="answers-container"></div>
    `;
    
    // Add answers
    const answersContainer = questionEditor.querySelector('.answers-container');
    
    if (question && question.answers.length > 0) {
        question.answers.forEach((answer, answerIndex) => {
            addAnswerEditor(answersContainer, answer, answerIndex);
        });
    } else {
        // Add two blank answers by default
        addAnswerEditor(answersContainer);
        addAnswerEditor(answersContainer);
    }
    
    // Add answer button
    const addAnswerBtn = document.createElement('button');
    addAnswerBtn.className = 'add-answer-btn';
    addAnswerBtn.textContent = 'Add Answer';
    addAnswerBtn.addEventListener('click', () => {
        addAnswerEditor(answersContainer);
    });
    
    // Remove question button
    const removeQuestionBtn = document.createElement('button');
    removeQuestionBtn.className = 'remove-question-btn';
    removeQuestionBtn.textContent = 'Remove Question';
    removeQuestionBtn.addEventListener('click', () => {
        if (container.children.length > 1 || confirm('This is the last question. Remove it anyway?')) {
            questionEditor.remove();
            
            // Update question numbers
            Array.from(container.children).forEach((question, idx) => {
                question.querySelector('h4').textContent = `Question ${idx + 1}`;
                question.dataset.index = idx;
            });
        }
    });
    
    // Add buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'editor-buttons';
    buttonsContainer.appendChild(addAnswerBtn);
    buttonsContainer.appendChild(removeQuestionBtn);
    questionEditor.appendChild(buttonsContainer);
    
    container.appendChild(questionEditor);
}

function addAnswerEditor(container, answer = null, answerIndex = null) {
    const index = answerIndex !== null ? answerIndex : container.children.length;
    
    const answerEditor = document.createElement('div');
    answerEditor.className = 'answer-editor';
    answerEditor.dataset.index = index;
    
    // Answer text and correct status
    const answerText = answer ? answer.text : '';
    const isCorrect = answer ? answer.isCorrect : false;
    
    answerEditor.innerHTML = `
        <input type="checkbox" class="answer-correct" ${isCorrect ? 'checked' : ''}>
        <input type="text" class="answer-text" placeholder="Enter answer text" value="${answerText}">
        <button class="remove-answer-btn">×</button>
    `;
    
    // Remove answer button event
    answerEditor.querySelector('.remove-answer-btn').addEventListener('click', () => {
        if (container.children.length > 2 || confirm('Each question needs at least two answers. Remove anyway?')) {
            answerEditor.remove();
        }
    });
    
    container.appendChild(answerEditor);
}
