document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const timerDisplay = document.getElementById('timer-display');
    const playPauseButton = document.getElementById('play-pause-button');
    const resetButton = document.getElementById('reset-button');
    const overallTitleInput = document.getElementById('overall-title-input');
    const overallTitleDisplay = document.getElementById('overall-title-display');
    const taskDescriptionInput = document.getElementById('task-description-input');
    const pomodoroListContainer = document.getElementById('pomodoro-list-container');
    const pomodoroList = document.getElementById('pomodoro-list');
    const alarmSound = document.getElementById('alarm-sound');
    const taskInputSection = document.getElementById('task-input-section');

    // Constantes de tiempo (en segundos)
    const WORK_DURATION = 25 * 60;
    const SHORT_BREAK_DURATION = 5 * 60;
    const LONG_BREAK_DURATION = 15 * 60;

    // Estado del temporizador
    let timerInterval = null;
    let timeLeft = WORK_DURATION;
    let isRunning = false;
    let currentPhase = 'work'; // 'work', 'shortBreak', 'longBreak'
    let workSessionsCompleted = 0;
    let currentTaskDescription = '';
    let tasksHistory = []; // Para almacenar { type: 'work'/'break', description: '...', completed: false }

    // --- Inicialización ---
    updateTimerDisplay();
    taskInputSection.style.display = 'block'; // Mostrar input de tarea al inicio

    // --- Funciones Auxiliares ---
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        const formattedTime = formatTime(timeLeft);
        timerDisplay.textContent = formattedTime;
        document.title = `${formattedTime} - ${getPhaseName()} | Pomodoro Pro`;
    }

    function getPhaseName() {
        switch (currentPhase) {
            case 'work': return 'Trabajo';
            case 'shortBreak': return 'Descanso Corto';
            case 'longBreak': return 'Descanso Largo';
            default: return 'Pomodoro';
        }
    }

    function playAlarm() {
        alarmSound.currentTime = 0; // Reinicia por si se llama rápido
        alarmSound.play().catch(error => console.error("Error al reproducir sonido:", error)); // El .catch es buena práctica
    }

    function scrollToBottom() {
        // El contenedor está en flex-direction: column-reverse,
        // así que el scroll debe ir a 0 para ver lo último añadido (que está arriba visualmente).
        // Si no usaras column-reverse, sería:
        // pomodoroListContainer.scrollTop = pomodoroListContainer.scrollHeight;
        pomodoroListContainer.scrollTop = 0; // Con column-reverse
    }

    function addTaskToList(type, description) {
        const li = document.createElement('li');
        let icon = '';
        let text = description;

        if (type === 'work') {
            icon = '🍅';
        } else if (type === 'shortBreak') {
            icon = '☕';
            text = description || 'Descanso Corto (5 min)';
        } else if (type === 'longBreak') {
            icon = '🌴';
            text = description || 'Descanso Largo (15 min)';
        }

        li.innerHTML = `<span class="icon">${icon}</span> <span class="text">${text}</span>`;
        li.dataset.type = type; // Guardar tipo para referencia

        if (type.includes('Break')) {
            li.classList.add('break-item');
        }

        // Marcar como actual (se añade al inicio de la lista por column-reverse)
        li.classList.add('current-task');

        // Quitar 'current-task' del anterior (si existe)
        const previousCurrent = pomodoroList.querySelector('.current-task');
        if (previousCurrent) {
            previousCurrent.classList.remove('current-task');
             // Marcar el anterior como completado si no era un descanso ya completado
            if (!previousCurrent.classList.contains('completed-task')) {
                 previousCurrent.classList.add('completed-task');
            }
        }

        pomodoroList.prepend(li); // Añadir al principio (visualmente abajo por column-reverse)
        scrollToBottom();
    }


    // --- Control del Temporizador ---
    function startTimer() {
        if (isRunning) return;

        // Validar si es sesión de trabajo y hay descripción
        if (currentPhase === 'work') {
            currentTaskDescription = taskDescriptionInput.value.trim();
            if (!currentTaskDescription) {
                alert('Por favor, describe tu tarea para este Pomodoro.');
                taskDescriptionInput.focus();
                return;
            }
             // Añadir tarea a la lista como actual
            addTaskToList('work', currentTaskDescription);
            tasksHistory.push({ type: 'work', description: currentTaskDescription, completed: false });
            taskDescriptionInput.value = ''; // Limpiar input
            taskInputSection.style.display = 'none'; // Ocultar input durante el pomodoro
        } else {
             // Añadir item de descanso a la lista como actual
             addTaskToList(currentPhase);
             tasksHistory.push({ type: currentPhase, description: getPhaseName(), completed: false });
             taskInputSection.style.display = 'none'; // Ocultar input durante descansos
        }


        isRunning = true;
        playPauseButton.textContent = '⏸️'; // Pausa
        playPauseButton.setAttribute('aria-label', 'Pausar temporizador');

        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                playAlarm();
                moveToNextPhase();
            }
        }, 1000);
    }

    function pauseTimer() {
        if (!isRunning) return;
        isRunning = false;
        clearInterval(timerInterval);
        playPauseButton.textContent = '▶️'; // Play
        playPauseButton.setAttribute('aria-label', 'Continuar temporizador');
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        currentPhase = 'work';
        workSessionsCompleted = 0;
        timeLeft = WORK_DURATION;
        tasksHistory = []; // Limpiar historial
        currentTaskDescription = '';
        updateTimerDisplay();
        playPauseButton.textContent = '▶️'; // Play
         playPauseButton.setAttribute('aria-label', 'Iniciar temporizador');
        pomodoroList.innerHTML = ''; // Limpiar lista visual
        taskDescriptionInput.value = ''; // Limpiar input de tarea
        taskInputSection.style.display = 'block'; // Mostrar input de tarea
         // Opcional: Limpiar título general
        // overallTitleInput.value = '';
        // overallTitleDisplay.textContent = '';
        document.title = 'Pomodoro Pro'; // Reset title

        // Detener alarma si está sonando
        alarmSound.pause();
        alarmSound.currentTime = 0;
    }

    function moveToNextPhase() {
        isRunning = false;
        playPauseButton.textContent = '▶️'; // Listo para iniciar siguiente fase
         playPauseButton.setAttribute('aria-label', 'Iniciar temporizador');

        // Marcar la tarea/descanso actual como completado en el historial
        if (tasksHistory.length > 0) {
            tasksHistory[tasksHistory.length - 1].completed = true;
             // Actualizar visualmente el último elemento de la lista (el que acaba de terminar)
             const lastLi = pomodoroList.firstChild; // El último añadido está al principio por column-reverse
             if(lastLi) {
                 lastLi.classList.remove('current-task');
                 lastLi.classList.add('completed-task');
             }
        }

        if (currentPhase === 'work') {
            workSessionsCompleted++;
            if (workSessionsCompleted % 4 === 0) { // Después de 4 sesiones de trabajo
                currentPhase = 'longBreak';
                timeLeft = LONG_BREAK_DURATION;
                taskInputSection.style.display = 'none'; // No pedir tarea para descanso largo
            } else {
                currentPhase = 'shortBreak';
                timeLeft = SHORT_BREAK_DURATION;
                 taskInputSection.style.display = 'none'; // No pedir tarea para descanso corto
            }
        } else { // Si estaba en descanso (corto o largo)
            currentPhase = 'work';
            timeLeft = WORK_DURATION;
            taskInputSection.style.display = 'block'; // Pedir la siguiente tarea
            taskDescriptionInput.placeholder = `Describe tu Pomodoro #${workSessionsCompleted + 1}...`;
            taskDescriptionInput.focus();
        }

        updateTimerDisplay();
        // No iniciamos automáticamente, el usuario debe pulsar Play
    }

    // --- Event Listeners ---
    playPauseButton.addEventListener('click', () => {
        if (isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });

    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar todo el ciclo Pomodoro?')) {
            resetTimer();
        }
    });

    // Actualizar título general al perder el foco
    overallTitleInput.addEventListener('blur', () => {
        overallTitleDisplay.textContent = overallTitleInput.value.trim();
    });
     // Opcional: Actualizar también al presionar Enter en el título general
     overallTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
             overallTitleDisplay.textContent = overallTitleInput.value.trim();
             overallTitleInput.blur(); // Quitar foco
        }
    });


    // Iniciar Pomodoro con Enter en la descripción de tarea
    taskDescriptionInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !isRunning && currentPhase === 'work') {
             e.preventDefault(); // Evita cualquier comportamiento por defecto del Enter
            startTimer(); // Intenta iniciar el timer (validará si hay texto)
        }
    });

}); // Fin de DOMContentLoaded