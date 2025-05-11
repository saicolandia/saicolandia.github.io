// Quiz interface handling
export function setupQuizInterface(quizManager, scene, camera) {
    const currentQuiz = quizManager.getCurrentQuiz();
    if (!currentQuiz) return;
    
    // Set up the quiz interface
    updateQuestionDisplay();
    
    // Set up event listeners
    document.getElementById('submit-btn').addEventListener('click', submitAnswer);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    
    // Update the question display
    function updateQuestionDisplay() {
        const currentQuestion = quizManager.getCurrentQuestion();
        if (!currentQuestion) return;
        
        // Update question text
        const questionContainer = document.getElementById('question-container');
        questionContainer.innerHTML = `
            <h3>Question ${quizManager.currentQuestionIndex + 1} of ${currentQuiz.questions.length}</h3>
            <p class="medical-border">${currentQuestion.text}</p>
        `;
        
        // Update answers
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';
        
        currentQuestion.answers.forEach((answer, index) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer-option';
            answerElement.dataset.index = index;
            
            answerElement.innerHTML = `
                <div class="checkbox"></div>
                <span>${answer.text}</span>
            `;
            
            answerElement.addEventListener('click', () => toggleAnswer(index));
            
            answersContainer.appendChild(answerElement);
        });
        
        // Hide feedback and next button
        document.getElementById('feedback-container').innerHTML = '';
        document.getElementById('feedback-container').className = '';
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
        
        // Move camera to focus on the quiz interface
        animateCameraToQuizPosition(camera);
    }
    
    // Toggle answer selection
    function toggleAnswer(index) {
        const answerElement = document.querySelector(`.answer-option[data-index="${index}"]`);
        const checkbox = answerElement.querySelector('.checkbox');
        
        if (answerElement.classList.contains('selected')) {
            answerElement.classList.remove('selected');
            checkbox.classList.remove('checked');
        } else {
            answerElement.classList.add('selected');
            checkbox.classList.add('checked');
        }
    }
    
    // Submit answer
    function submitAnswer() {
        // Get selected answers
        const selectedElements = document.querySelectorAll('.answer-option.selected');
        const selectedIndices = Array.from(selectedElements).map(el => parseInt(el.dataset.index));
        
        // Submit to quiz manager
        quizManager.submitAnswer(selectedIndices);
        
        // Show feedback
        const currentQuestion = quizManager.getCurrentQuestion();
        const feedbackContainer = document.getElementById('feedback-container');
        
        // Check if answer is correct
        const isCorrect = quizManager.isAnswerCorrect(quizManager.currentQuestionIndex);
        
        if (isCorrect) {
            feedbackContainer.innerHTML = '<p>Correct! Well done!</p>';
            feedbackContainer.className = 'feedback-correct';
            playCorrectAnimation(scene);
        } else {
            feedbackContainer.innerHTML = '<p>Incorrect. Review the correct answers:</p>';
            feedbackContainer.className = 'feedback-incorrect';
            
            // Show correct answers
            const correctAnswers = currentQuestion.answers
                .map((answer, index) => ({ text: answer.text, isCorrect: answer.isCorrect }))
                .filter(answer => answer.isCorrect)
                .map(answer => answer.text)
                .join(', ');
                
            feedbackContainer.innerHTML += `<p>Correct answers: ${correctAnswers}</p>`;
            
            playIncorrectAnimation(scene);
        }
        
        // Show correct/incorrect indicators on answers
        currentQuestion.answers.forEach((answer, index) => {
            const answerElement = document.querySelector(`.answer-option[data-index="${index}"]`);
            
            if (answer.isCorrect) {
                answerElement.classList.add('correct');
            } else if (selectedIndices.includes(index)) {
                answerElement.classList.add('incorrect');
            }
        });
        
        // Hide submit button, show next button
        document.getElementById('submit-btn').classList.add('hidden');
        document.getElementById('next-btn').classList.remove('hidden');
    }
    
    // Next question
    function nextQuestion() {
        const hasNext = quizManager.nextQuestion();
        
        if (hasNext) {
            updateQuestionDisplay();
        } else {
            // Quiz completed
            showQuizResults();
        }
    }
    
    // Show quiz results
    function showQuizResults() {
        const score = quizManager.calculateScore();
        
        // Hide quiz interface
        document.getElementById('quiz-interface').classList.add('hidden');
        
        // Show results in dashboard
        document.getElementById('dashboard-container').classList.remove('hidden');
        setupDashboard(quizManager);
        
        // Move camera to dashboard view
        animateCameraToDashboardPosition(camera);
    }
}

// Animate camera to quiz position
function animateCameraToQuizPosition(camera) {
    const targetPosition = { x: 0, y: 0, z: 5 };
    const duration = 1000; // ms
    const startPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
    const startTime = Date.now();
    
    function updateCamera() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease in-out function
        const easeProgress = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;
        
        camera.position.x = startPosition.x + (targetPosition.x - startPosition.x) * easeProgress;
        camera.position.y = startPosition.y + (targetPosition.y - startPosition.y) * easeProgress;
        camera.position.z = startPosition.z + (targetPosition.z - startPosition.z) * easeProgress;
        
        if (progress < 1) {
            requestAnimationFrame(updateCamera);
        }
    }
    
    updateCamera();
}

// Animate camera to dashboard position
function animateCameraToDashboardPosition(camera) {
    const targetPosition = { x: 0, y: 2, z: 8 };
    const duration = 1000; // ms
    const startPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
    const startTime = Date.now();
    
    function updateCamera() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease in-out function
        const easeProgress = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;
        
        camera.position.x = startPosition.x + (targetPosition.x - startPosition.x) * easeProgress;
        camera.position.y = startPosition.y + (targetPosition.y - startPosition.y) * easeProgress;
        camera.position.z = startPosition.z + (targetPosition.z - startPosition.z) * easeProgress;
        
        if (progress < 1) {
            requestAnimationFrame(updateCamera);
        }
    }
    
    updateCamera();
}

// Play correct answer animation
function playCorrectAnimation(scene) {
    const THREE = window.THREE;
    
    // Create particles for celebration effect
    const particleCount = 100;
    const particles = new THREE.Group();
    
    const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0x2ecc71 });
    
    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        
        // Random position around center
        particle.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        
        // Random velocity
        particle.userData.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.2
        );
        
        particles.add(particle);
    }
    
    scene.add(particles);
    
    // Animation duration
    const duration = 2000; // ms
    const startTime = Date.now();
    
    function updateParticles() {
        const elapsed = Date.now() - startTime;
        
        if (elapsed < duration) {
            // Update particle positions
            particles.children.forEach(particle => {
                particle.position.add(particle.userData.velocity);
                particle.scale.multiplyScalar(0.99); // Shrink particles over time
            });
            
            requestAnimationFrame(updateParticles);
        } else {
            // Remove particles after animation
            scene.remove(particles);
        }
    }
    
    updateParticles();
}

// Play incorrect answer animation
function playIncorrectAnimation(scene) {
    const THREE = window.THREE;
    
    // Create red flash effect
    const flashGeometry = new THREE.PlaneGeometry(100, 100);
    const flashMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xe74c3c,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });
    
    const flash = new THREE.Mesh(flashGeometry, flashMaterial);
    flash.position.z = -10;
    scene.add(flash);
    
    // Animation duration
    const duration = 500; // ms
    const startTime = Date.now();
    
    function updateFlash() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            // Fade out the flash
            flash.material.opacity = 0.3 * (1 - progress);
            requestAnimationFrame(updateFlash);
        } else {
            // Remove flash after animation
            scene.remove(flash);
        }
    }
    
    updateFlash();
}
