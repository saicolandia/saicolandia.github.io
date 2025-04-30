document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const timerDisplay = document.getElementById('timer-display');
    const playPauseButton = document.getElementById('play-pause-button');
    const resetButton = document.getElementById('reset-button');
    const overallTitleInput = document.getElementById('overall-title-input');
    // overallTitleDisplay ya no existe
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
    let nextOverallTitle = ''; // Almacena el título ingresado para el siguiente bloque
    // tasksHistory ya no es necesario si no mostramos descansos ni necesitamos un historial lógico complejo
    let notificationPermission = Notification.permission; // 'default', 'granted', 'denied'

    // --- Inicialización ---
    updateTimerDisplay();
    taskInputSection.style.display = 'block'; // Mostrar input de tarea al inicio
    requestNotificationPermission(); // Pedir permiso al cargar (o al primer play)

    // --- Funciones de Notificación ---
    function requestNotificationPermission() {
        if (Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
                notificationPermission = permission;
                if (permission === 'granted') {
                    console.log("Permiso de notificación concedido.");
                } else {
                    console.log("Permiso de notificación denegado.");
                }
            });
        }
    }

    function showNotification(message) {
        if (notificationPermission !== 'granted') {
            console.log("Notificaciones bloqueadas o no solicitadas.");
            return;
        }

        const notification = new Notification("Pomodoro Pro", {
            body: message,
            icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍅</text></svg>' // Puedes usar una URL de icono si prefieres
        });

        // Opcional: cerrar notificación después de unos segundos
        setTimeout(notification.close.bind(notification), 5000);
    }


    // --- Funciones Auxiliares ---
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        const formattedTime = formatTime(timeLeft);
        timerDisplay.textContent = formattedTime;
        let titlePhase = '';
        switch (currentPhase) {
            case 'work': titlePhase = currentTaskDescription || 'Trabajo'; break;
            case 'shortBreak': titlePhase = 'Descanso Corto'; break;
            case 'longBreak': titlePhase = 'Descanso Largo'; break;
            default: titlePhase = 'Pomodoro';
        }
        document.title = `${formattedTime} - ${titlePhase} | Pomodoro Pro`;
    }

    function playAlarm() {
        alarmSound.currentTime = 0;
        alarmSound.play()
            .then(() => console.log("Alarma sonando."))
            .catch(error => console.error("Error al reproducir sonido:", error, "- ¿Existe 'alarm.mp3'? ¿Permitió el navegador la reproducción?"));
    }

    function scrollToBottom() {
        pomodoroListContainer.scrollTop = 0; // Con column-reverse
    }

    // Función modificada para añadir títulos o tareas de trabajo a la lista
    function addItemToList(item) { // item = { type: 'title'/'work', text: '...' }
        const li = document.createElement('li');
        let iconSpan = '';

        if (item.type === 'title') {
            li.classList.add('title-item');
        } else if (item.type === 'work') {
            li.classList.add('work-item');
            // Marcar como actual al añadir
            li.classList.add('current-task');
             // Quitar 'current-task' del anterior elemento de trabajo (si existe)
             const previousCurrent = pomodoroList.querySelector('.work-item.current-task');
             if (previousCurrent) {
                 previousCurrent.classList.remove('current-task');
                 // Marcar el anterior como completado si no lo estaba ya
                 if (!previousCurrent.classList.contains('completed-task')) {
                      previousCurrent.classList.add('completed-task');
                 }
             }
            iconSpan = '<span class="icon">🍅</span>';
        }

        li.innerHTML = `${iconSpan} <span class="text">${item.text}</span>`;
        li.dataset.type = item.type;

        pomodoroList.prepend(li); // Añadir al principio (visualmente abajo)
        scrollToBottom();
    }


    // --- Control del Temporizador ---
    function startTimer() {
        if (isRunning) return;

        // Asegurarse de tener permiso de notificación al iniciar
        requestNotificationPermission();

        // Si es fase de trabajo, manejar título y descripción
        if (currentPhase === 'work') {
            currentTaskDescription = taskDescriptionInput.value.trim();
            if (!currentTaskDescription) {
                alert('Por favor, describe tu tarea para este Pomodoro.');
                taskDescriptionInput.focus();
                return;
            }

            // Añadir el título general PENDIENTE a la lista (si existe)
            if (nextOverallTitle) {
                addItemToList({ type: 'title', text: nextOverallTitle });
                nextOverallTitle = ''; // Limpiar título pendiente
                overallTitleInput.value = ''; // Limpiar input de título general
            }

             // Añadir tarea de trabajo a la lista como actual
            addItemToList({ type: 'work', text: currentTaskDescription });

            taskDescriptionInput.value = ''; // Limpiar input de tarea
            taskInputSection.style.display = 'none'; // Ocultar input durante el pomodoro
        } else {
             // Durante descansos, el input de tarea ya debería estar oculto
             // No añadimos nada a la lista para los descansos
             taskInputSection.style.display = 'none';
             currentTaskDescription = ''; // Limpiamos descripción por si acaso
        }


        isRunning = true;
        playPauseButton.textContent = '⏸️';
        playPauseButton.setAttribute('aria-label', 'Pausar temporizador');
        updateTimerDisplay(); // Actualizar título de pestaña inmediatamente

        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                playAlarm();
                // Mostrar notificación al terminar cualquier fase
                let phaseEndMessage = '';
                 if (currentPhase === 'work') {
                     phaseEndMessage = `¡Pomodoro "${currentTaskDescription || 'Trabajo'}" completado! Tiempo para un descanso.`;
                 } else if (currentPhase === 'shortBreak') {
                     phaseEndMessage = '¡Descanso corto terminado! Listo para el siguiente Pomodoro.';
                 } else if (currentPhase === 'longBreak') {
                      phaseEndMessage = '¡Descanso largo terminado! A seguir trabajando.';
                 }
                 showNotification(phaseEndMessage);

                moveToNextPhase();
            }
        }, 1000);
    }

    function pauseTimer() {
        if (!isRunning) return;
        isRunning = false;
        clearInterval(timerInterval);
        playPauseButton.textContent = '▶️';
        playPauseButton.setAttribute('aria-label', 'Continuar temporizador');
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        currentPhase = 'work';
        workSessionsCompleted = 0;
        timeLeft = WORK_DURATION;
        currentTaskDescription = '';
        nextOverallTitle = ''; // Limpiar título pendiente
        updateTimerDisplay();
        playPauseButton.textContent = '▶️';
        playPauseButton.setAttribute('aria-label', 'Iniciar temporizador');
        pomodoroList.innerHTML = ''; // Limpiar lista visual
        taskDescriptionInput.value = ''; // Limpiar input de tarea
        overallTitleInput.value = ''; // Limpiar input de título general
        taskInputSection.style.display = 'block'; // Mostrar input de tarea
        document.title = 'Pomodoro Pro';

        alarmSound.pause();
        alarmSound.currentTime = 0;
    }

    function moveToNextPhase() {
        isRunning = false;
        playPauseButton.textContent = '▶️';
        playPauseButton.setAttribute('aria-label', 'Iniciar temporizador');

        // Marcar la tarea de TRABAJO actual como completada en la lista visual
         if (currentPhase === 'work') {
             const lastWorkItem = pomodoroList.querySelector('.work-item.current-task');
             if(lastWorkItem) {
                 lastWorkItem.classList.remove('current-task');
                 lastWorkItem.classList.add('completed-task');
             }
             workSessionsCompleted++; // Incrementar solo al completar trabajo
         }
         // NO se hace nada visualmente al terminar descansos

        // Determinar la SIGUIENTE fase
        if (currentPhase === 'work') {
            if (workSessionsCompleted > 0 && workSessionsCompleted % 3 === 0) { // Ajuste: después de 3 de trabajo (25'+5')*3
                currentPhase = 'longBreak';
                timeLeft = LONG_BREAK_DURATION;
                taskInputSection.style.display = 'none';
            } else {
                currentPhase = 'shortBreak';
                timeLeft = SHORT_BREAK_DURATION;
                 taskInputSection.style.display = 'none';
            }
        } else { // Si estaba en descanso (corto o largo)
            currentPhase = 'work';
            timeLeft = WORK_DURATION;
            taskInputSection.style.display = 'block';
            taskDescriptionInput.placeholder = `Describe tu Pomodoro #${workSessionsCompleted + 1}...`;
            taskDescriptionInput.focus();
        }

        currentTaskDescription = ''; // Limpiar descripción para la nueva fase (importante para descansos)
        updateTimerDisplay();
        // No iniciamos automáticamente, el usuario debe pulsar Play
    }

    // --- Event Listeners ---
    playPauseButton.addEventListener('click', () => {
        if (isRunning) {
            pauseTimer();
        } else {
            // Si es la primera vez o el permiso fue denegado y ahora está 'default'
            if (Notification.permission === 'default') {
                requestNotificationPermission();
            }
            startTimer();
        }
    });

    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar todo el ciclo Pomodoro?')) {
            resetTimer();
        }
    });

    // Guardar título general para el próximo bloque al presionar Enter o perder foco
    function handleOverallTitleInput() {
        const title = overallTitleInput.value.trim();
        if (title) {
            nextOverallTitle = title;
            // Podrías dar feedback visual de que se guardó, pero por ahora solo limpia si no está corriendo
             if (!isRunning) {
                 // overallTitleInput.value = ''; // Decide si quieres limpiarlo aquí o al usarse
             }
        }
    }
    overallTitleInput.addEventListener('blur', handleOverallTitleInput);
    overallTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleOverallTitleInput();
            overallTitleInput.blur(); // Quitar foco
            // Si no está corriendo y hay tarea, enfocar la tarea
            if (!isRunning && currentPhase === 'work') {
                 taskDescriptionInput.focus();
            }
        }
    });


    // Iniciar Pomodoro con Enter en la descripción de tarea
    taskDescriptionInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !isRunning && currentPhase === 'work') {
             e.preventDefault();
            startTimer();
        }
    });

}); // Fin de DOMContentLoaded