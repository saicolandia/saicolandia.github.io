// Quiz data management class
export class QuizManager {
    constructor() {
        this.quizzes = [];
        this.currentQuizIndex = 0;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.scores = [];
        this.loadProgress();
    }
    
    loadSampleQuizzes() {
        // Sample medical quiz data
        this.quizzes = [
            {
                title: "Anatomy Basics",
                description: "Test your knowledge of human anatomy fundamentals",
                questions: [
                    {
                        text: "Which of the following are bones in the human arm?",
                        answers: [
                            { text: "Humerus", isCorrect: true },
                            { text: "Femur", isCorrect: false },
                            { text: "Radius", isCorrect: true },
                            { text: "Tibia", isCorrect: false },
                            { text: "Ulna", isCorrect: true }
                        ]
                    },
                    {
                        text: "Which of these are chambers of the human heart?",
                        answers: [
                            { text: "Right atrium", isCorrect: true },
                            { text: "Left ventricle", isCorrect: true },
                            { text: "Superior vena cava", isCorrect: false },
                            { text: "Right ventricle", isCorrect: true },
                            { text: "Aortic valve", isCorrect: false }
                        ]
                    },
                    {
                        text: "Which of the following are parts of the human brain?",
                        answers: [
                            { text: "Cerebellum", isCorrect: true },
                            { text: "Medulla oblongata", isCorrect: true },
                            { text: "Hypothalamus", isCorrect: true },
                            { text: "Pancreas", isCorrect: false },
                            { text: "Thyroid", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                title: "Medical Terminology",
                description: "Learn and test your knowledge of common medical terms",
                questions: [
                    {
                        text: "Which of these terms refer to inflammation?",
                        answers: [
                            { text: "Hepatitis", isCorrect: true },
                            { text: "Nephritis", isCorrect: true },
                            { text: "Anemia", isCorrect: false },
                            { text: "Dermatitis", isCorrect: true },
                            { text: "Hypoglycemia", isCorrect: false }
                        ]
                    },
                    {
                        text: "Which of these prefixes mean 'within' or 'inside'?",
                        answers: [
                            { text: "Intra-", isCorrect: true },
                            { text: "Extra-", isCorrect: false },
                            { text: "Endo-", isCorrect: true },
                            { text: "Exo-", isCorrect: false },
                            { text: "Peri-", isCorrect: false }
                        ]
                    },
                    {
                        text: "Which of these terms relate to the heart?",
                        answers: [
                            { text: "Cardiac", isCorrect: true },
                            { text: "Hepatic", isCorrect: false },
                            { text: "Coronary", isCorrect: true },
                            { text: "Renal", isCorrect: false },
                            { text: "Myocardial", isCorrect: true }
                        ]
                    }
                ]
            }
        ];
        
        // Save to local storage
        this.saveQuizzes();
    }
    
    hasQuizzes() {
        return this.quizzes.length > 0;
    }
    
    getCurrentQuiz() {
        return this.quizzes[this.currentQuizIndex];
    }
    
    getCurrentQuestion() {
        const currentQuiz = this.getCurrentQuiz();
        if (!currentQuiz) return null;
        
        return currentQuiz.questions[this.currentQuestionIndex];
    }
    
    selectQuiz(index) {
        if (index >= 0 && index < this.quizzes.length) {
            this.currentQuizIndex = index;
            this.currentQuestionIndex = 0;
            this.userAnswers = [];
            return true;
        }
        return false;
    }
    
    nextQuestion() {
        const currentQuiz = this.getCurrentQuiz();
        if (!currentQuiz) return false;
        
        if (this.currentQuestionIndex < currentQuiz.questions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            return true;
        }
        return false;
    }
    
    submitAnswer(selectedAnswerIndices) {
        const currentQuestion = this.getCurrentQuestion();
        if (!currentQuestion) return false;
        
        // Save user's answer
        this.userAnswers[this.currentQuestionIndex] = selectedAnswerIndices;
        
        return true;
    }
    
    isAnswerCorrect(questionIndex) {
        const currentQuiz = this.getCurrentQuiz();
        if (!currentQuiz) return false;
        
        const question = currentQuiz.questions[questionIndex];
        const userAnswer = this.userAnswers[questionIndex];
        
        if (!question || !userAnswer) return false;
        
        // Check if user selected all correct answers and no incorrect ones
        let allCorrectSelected = true;
        let noIncorrectSelected = true;
        
        for (let i = 0; i < question.answers.length; i++) {
            const isSelected = userAnswer.includes(i);
            const isCorrect = question.answers[i].isCorrect;
            
            if (isCorrect && !isSelected) {
                allCorrectSelected = false;
            }
            
            if (!isCorrect && isSelected) {
                noIncorrectSelected = false;
            }
        }
        
        return allCorrectSelected && noIncorrectSelected;
    }
    
    calculateScore() {
        const currentQuiz = this.getCurrentQuiz();
        if (!currentQuiz) return 0;
        
        let correctCount = 0;
        
        for (let i = 0; i < currentQuiz.questions.length; i++) {
            if (this.isAnswerCorrect(i)) {
                correctCount++;
            }
        }
        
        const score = {
            quizTitle: currentQuiz.title,
            totalQuestions: currentQuiz.questions.length,
            correctAnswers: correctCount,
            percentage: Math.round((correctCount / currentQuiz.questions.length) * 100),
            date: new Date().toISOString()
        };
        
        // Save score to history
        this.scores.push(score);
        this.saveProgress();
        
        return score;
    }
    
    getScoreHistory() {
        return this.scores;
    }
    
    getQuizList() {
        return this.quizzes.map(quiz => ({
            title: quiz.title,
            description: quiz.description,
            questionCount: quiz.questions.length
        }));
    }
    
    addQuiz(quiz) {
        this.quizzes.push(quiz);
        this.saveQuizzes();
        return this.quizzes.length - 1;
    }
    
    updateQuiz(index, quiz) {
        if (index >= 0 && index < this.quizzes.length) {
            this.quizzes[index] = quiz;
            this.saveQuizzes();
            return true;
        }
        return false;
    }
    
    deleteQuiz(index) {
        if (index >= 0 && index < this.quizzes.length) {
            this.quizzes.splice(index, 1);
            
            // Adjust current index if needed
            if (this.currentQuizIndex >= this.quizzes.length) {
                this.currentQuizIndex = Math.max(0, this.quizzes.length - 1);
            }
            
            this.saveQuizzes();
            return true;
        }
        return false;
    }
    
    saveQuizFromEditor() {
        // Get quiz data from the editor form
        const quizEditor = document.getElementById('quiz-editor');
        const questionEditors = quizEditor.querySelectorAll('.question-editor');
        
        const quiz = {
            title: document.getElementById('quiz-title').value || 'Untitled Quiz',
            description: document.getElementById('quiz-description').value || 'No description',
            questions: []
        };
        
        // Process each question
        questionEditors.forEach(questionEditor => {
            const questionText = questionEditor.querySelector('.question-text').value;
            const answerEditors = questionEditor.querySelectorAll('.answer-editor');
            
            const question = {
                text: questionText,
                answers: []
            };
            
            // Process each answer
            answerEditors.forEach(answerEditor => {
                const answerText = answerEditor.querySelector('.answer-text').value;
                const isCorrect = answerEditor.querySelector('.answer-correct').checked;
                
                question.answers.push({
                    text: answerText,
                    isCorrect: isCorrect
                });
            });
            
            quiz.questions.push(question);
        });
        
        // Validate quiz
        if (quiz.questions.length === 0) {
            alert('Quiz must have at least one question');
            return false;
        }
        
        for (const question of quiz.questions) {
            if (!question.text) {
                alert('All questions must have text');
                return false;
            }
            
            if (question.answers.length < 2) {
                alert('Each question must have at least two answers');
                return false;
            }
            
            if (!question.answers.some(answer => answer.isCorrect)) {
                alert('Each question must have at least one correct answer');
                return false;
            }
            
            for (const answer of question.answers) {
                if (!answer.text) {
                    alert('All answers must have text');
                    return false;
                }
            }
        }
        
        // Save the quiz
        const editingIndex = parseInt(quizEditor.dataset.editingIndex);
        
        if (!isNaN(editingIndex) && editingIndex >= 0 && editingIndex < this.quizzes.length) {
            // Update existing quiz
            this.updateQuiz(editingIndex, quiz);
        } else {
            // Add new quiz
            this.addQuiz(quiz);
        }
        
        return true;
    }
    
    saveQuizzes() {
        localStorage.setItem('medicalQuizzes', JSON.stringify(this.quizzes));
    }
    
    loadQuizzes() {
        const savedQuizzes = localStorage.getItem('medicalQuizzes');
        if (savedQuizzes) {
            this.quizzes = JSON.parse(savedQuizzes);
            return true;
        }
        return false;
    }
    
    saveProgress() {
        localStorage.setItem('medicalQuizScores', JSON.stringify(this.scores));
    }
    
    loadProgress() {
        const savedScores = localStorage.getItem('medicalQuizScores');
        if (savedScores) {
            this.scores = JSON.parse(savedScores);
        }
        
        return this.loadQuizzes();
    }
}
