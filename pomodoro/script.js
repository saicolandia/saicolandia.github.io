document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM (igual que antes)
    const timerDisplay = document.getElementById('timer-display');
    const playPauseButton = document.getElementById('play-pause-button');
    const resetButton = document.getElementById('reset-button');
    const overallTitleInput = document.getElementById('overall-title-input');
    const taskDescriptionInput = document.getElementById('task-description-input');
    const pomodoroListContainer = document.getElementById('pomodoro-list-container');
    const pomodoroList = document.getElementById('pomodoro-list');
    const alarmSound = document.getElementById('alarm-sound');
    const taskInputSection = document.getElementById('task-input-section');

    // Constantes de tiempo (igual que antes)
    const WORK_DURATION = 25 * 60;
    const SHORT_BREAK_DURATION = 5 * 60;
    const LONG_BREAK_DURATION = 15 * 60;

    // Estado del temporizador (igual que antes)
    let timerInterval = null;
    let timeLeft = WORK_DURATION;
    let isRunning = false;
    let currentPhase = 'work';
    let workSessionsCompleted = 0; // Se cargará desde localStorage
    let currentTaskDescription = '';
    let nextOverallTitle = ''; // Se cargará desde localStorage
    let notificationPermission = Notification.permission;

    // ****** NUEVO: Estado persistente ******
    let listItems = []; // Array para mantener la estructura lógica de la lista

    // ****** NUEVO: Claves para localStorage ******
    const STORAGE_KEYS = {
        list: 'pomodoroListItems',
        sessions: 'pomodoroWorkSessions',
        nextTitle: 'pomodoroNextTitle'
    };

    // --- Funciones de Notificación (sin cambios) ---
    function requestNotificationPermission() { /* ... igual que antes ... */
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
    function showNotification(message) { /* ... igual que antes ... */
        if (notificationPermission !== 'granted') {
            console.log("Notificaciones bloqueadas o no solicitadas.");
            return;
        }
        const notification = new Notification("Pomodoro Pro", {
            body: message,
            icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍅</text></svg>'
        });
        setTimeout(notification.close.bind(notification), 5000);
    }

    // --- Funciones Auxiliares (formatTime, playAlarm, scrollToBottom sin cambios) ---
    function formatTime(seconds) { /* ... igual que antes ... */
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    function playAlarm() { /* ... igual que antes ... */
         alarmSound.currentTime = 0;
        alarmSound.play()
            .then(() => console.log("Alarma sonando."))
            .catch(error => console.error("Error al reproducir sonido:", error, "- ¿Existe 'alarm.mp3'? ¿Permitió el navegador la reproducción?"));
    }
    function scrollToBottom() { /* ... igual que antes ... */
        pomodoroListContainer.scrollTop = 0;
    }

    // --- Actualización del Temporizador y Título de Página (sin cambios lógicos) ---
    function updateTimerDisplay() { /* ... igual que antes ... */
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


    // ****** NUEVO: Funciones de Persistencia ******
    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEYS.list, JSON.stringify(listItems));
            localStorage.setItem(STORAGE_KEYS.sessions, String(workSessionsCompleted));
            localStorage.setItem(STORAGE_KEYS.nextTitle, nextOverallTitle);
            console.log("Estado guardado en localStorage.");
        } catch (error) {
            console.error("Error al guardar estado en localStorage:", error);
        }
    }

    function loadState() {
        try {
            const savedList = localStorage.getItem(STORAGE_KEYS.list);
            const savedSessions = localStorage.getItem(STORAGE_KEYS.sessions);
            const savedNextTitle = localStorage.getItem(STORAGE_KEYS.nextTitle);

            if (savedList) {
                listItems = JSON.parse(savedList);
                // Re-renderizar la lista visual desde listItems
                renderList();
            }

            if (savedSessions) {
                workSessionsCompleted = parseInt(savedSessions, 10) || 0;
            }

            if (savedNextTitle) {
                nextOverallTitle = savedNextTitle;
                // Opcional: Rellenar el input si hay un título pendiente al cargar
                overallTitleInput.value = nextOverallTitle;
            }
            console.log("Estado cargado desde localStorage.");

        } catch (error) {
            console.error("Error al cargar estado desde localStorage:", error);
            // Si hay error (ej. JSON mal formado), resetea el estado lógico
            listItems = [];
            workSessionsCompleted = 0;
            nextOverallTitle = '';
        }
        // Asegurar que el estado inicial del timer y UI sea correcto después de cargar
        timeLeft = WORK_DURATION; // Siempre empieza en pausa con tiempo de trabajo
        currentPhase = 'work';
        isRunning = false;
        updateTimerDisplay();
        taskDescriptionInput.placeholder = `Describe tu Pomodoro #${workSessionsCompleted + 1}...`;
        taskInputSection.style.display = 'block'; // Mostrar input de tarea
        playPauseButton.textContent = '▶️';
         playPauseButton.setAttribute('aria-label', 'Iniciar temporizador');
    }

    // ****** NUEVO: Función para renderizar la lista completa desde listItems ******
    function renderList() {
        pomodoroList.innerHTML = ''; // Limpiar la lista visual actual
        // Añadir elementos en el orden guardado (appendChild los pone al final)
        // Como el contenedor es column-reverse, el último añadido visualmente estará abajo.
        listItems.forEach(item => {
            renderSingleListItem(item); // Usaremos una función auxiliar
        });
        scrollToBottom(); // Asegurar que el scroll esté abajo
    }

    // ****** NUEVO/MODIFICADO: Función para renderizar un único item y añadirlo al DOM ******
    function renderSingleListItem(item, markAsCurrent = false) {
        const li = document.createElement('li');
        let iconSpan = '';

        li.dataset.type = item.type;
        li.dataset.id = item.id; // Asignar ID único para futuras referencias si es necesario

        if (item.type === 'title') {
            li.classList.add('title-item');
        } else if (item.type === 'work') {
            li.classList.add('work-item');
            iconSpan = '<span class="icon">🍅</span>';
            if (item.completed) {
                li.classList.add('completed-task');
            }
            if (markAsCurrent) { // Marcar como actual si se especifica
                 li.classList.add('current-task');
            }
        }

        li.innerHTML = `${iconSpan} <span class="text">${item.text}</span>`;
        pomodoroList.appendChild(li); // Usar appendChild para mantener el orden de listItems
    }


    // ****** MODIFICADO: Añadir item ahora actualiza listItems y llama a render/save ******
    function addItemToList(itemData) { // itemData = { type: 'title'/'work', text: '...' }
        // Añadir un ID simple para poder encontrarlo luego si es necesario (opcional pero útil)
        const newItem = { ...itemData, completed: false, id: Date.now() }; // Añade completed status y ID
        listItems.push(newItem);

        // Limpiar y volver a renderizar toda la lista podría ser más simple
        // o añadir solo el nuevo elemento y actualizar el estado del anterior
        // Vamos a re-renderizar para simplicidad ahora:
        // renderList(); // Re-renderiza todo

        // Alternativa: Añadir solo el nuevo y actualizar el anterior 'current'
        // 1. Quitar 'current-task' del anterior elemento de trabajo
        const previousCurrent = pomodoroList.querySelector('.work-item.current-task');
        if (previousCurrent) {
            previousCurrent.classList.remove('current-task');
            // Asegurarse que el item correspondiente en listItems esté marcado como completed=false
            // (ya debería estarlo, pero por si acaso)
        }
         // 2. Renderizar solo el nuevo elemento (marcado como actual si es 'work')
         renderSingleListItem(newItem, newItem.type === 'work');


        saveState(); // Guardar el nuevo estado
        scrollToBottom();
    }


    // --- Control del Temporizador (startTimer, pauseTimer sin cambios lógicos internos) ---
    function startTimer() { /* ... lógica interna igual, pero ahora llama a addItemToList y saveState indirectamente ... */
        if (isRunning) return;
        requestNotificationPermission();

        if (currentPhase === 'work') {
            currentTaskDescription = taskDescriptionInput.value.trim();
            if (!currentTaskDescription) {
                alert('Por favor, describe tu tarea para este Pomodoro.');
                taskDescriptionInput.focus();
                return;
            }

            if (nextOverallTitle) {
                addItemToList({ type: 'title', text: nextOverallTitle });
                nextOverallTitle = '';
                overallTitleInput.value = '';
                // Guardar estado (se hace dentro de addItemToList y handleOverallTitleInput)
            }
            addItemToList({ type: 'work', text: currentTaskDescription });
            taskDescriptionInput.value = '';
            taskInputSection.style.display = 'none';
        } else {
             taskInputSection.style.display = 'none';
             currentTaskDescription = '';
        }

        isRunning = true;
        playPauseButton.textContent = '⏸️';
        playPauseButton.setAttribute('aria-label', 'Pausar temporizador');
        updateTimerDisplay();

        timerInterval = setInterval(() => {
             timeLeft--;
             updateTimerDisplay();

             if (timeLeft < 0) {
                 clearInterval(timerInterval);
                 playAlarm();
                 let phaseEndMessage = '';
                 let taskCompleted = false; // Flag para saber si hay que actualizar listItems

                 if (currentPhase === 'work') {
                      phaseEndMessage = `¡Pomodoro "${currentTaskDescription || 'Trabajo'}" completado! Tiempo para un descanso.`;
                      // ****** MODIFICADO: Marcar tarea como completada en listItems ******
                       const lastWorkItemIndex = listItems.findLastIndex(item => item.type === 'work');
                       if (lastWorkItemIndex !== -1) {
                           listItems[lastWorkItemIndex].completed = true;
                           taskCompleted = true; // Indicar que hubo un cambio
                       }
                      workSessionsCompleted++; // Incrementar contador lógico
                 } else if (currentPhase === 'shortBreak') {
                      phaseEndMessage = '¡Descanso corto terminado! Listo para el siguiente Pomodoro.';
                 } else if (currentPhase === 'longBreak') {
                      phaseEndMessage = '¡Descanso largo terminado! A seguir trabajando.';
                 }
                 showNotification(phaseEndMessage);

                 // ****** MODIFICADO: Guardar estado si se completó tarea o cambió workSessionsCompleted ******
                 if(taskCompleted) {
                     saveState(); // Guardar el estado actualizado de listItems y workSessionsCompleted
                     renderList(); // Re-renderizar para mostrar el estado completado
                 } else {
                    // Si solo terminó un descanso, solo guardar el contador actualizado si es necesario
                    // (Aunque workSessionsCompleted solo cambia al final del 'work')
                    // saveState(); // Podría ser redundante aquí, pero asegura consistencia
                 }


                 moveToNextPhase();
             }
         }, 1000);
    }
    function pauseTimer() { /* ... igual que antes ... */
        if (!isRunning) return;
        isRunning = false;
        clearInterval(timerInterval);
        playPauseButton.textContent = '▶️';
        playPauseButton.setAttribute('aria-label', 'Continuar temporizador');
    }

    // ****** MODIFICADO: resetTimer ahora limpia localStorage ******
    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        currentPhase = 'work';
        workSessionsCompleted = 0;
        timeLeft = WORK_DURATION;
        currentTaskDescription = '';
        nextOverallTitle = '';
        listItems = []; // Limpiar array lógico

        // Limpiar localStorage
        localStorage.removeItem(STORAGE_KEYS.list);
        localStorage.removeItem(STORAGE_KEYS.sessions);
        localStorage.removeItem(STORAGE_KEYS.nextTitle);
        console.log("localStorage limpiado.");

        updateTimerDisplay();
        playPauseButton.textContent = '▶️';
        playPauseButton.setAttribute('aria-label', 'Iniciar temporizador');
        pomodoroList.innerHTML = ''; // Limpiar lista visual
        taskDescriptionInput.value = '';
        overallTitleInput.value = '';
        taskInputSection.style.display = 'block';
        document.title = 'Pomodoro Pro';

        alarmSound.pause();
        alarmSound.currentTime = 0;
    }

    // ****** MODIFICADO: moveToNextPhase ya no necesita marcar visualmente, renderList lo hace ******
    function moveToNextPhase() {
        isRunning = false;
        playPauseButton.textContent = '▶️';
        playPauseButton.setAttribute('aria-label', 'Iniciar temporizador');

        // La lógica de completar el item en listItems y guardar
        // se movió a startTimer justo antes de llamar a moveToNextPhase.

        // Determinar la SIGUIENTE fase (sin cambios)
        if (currentPhase === 'work') {
            // workSessionsCompleted ya fue incrementado
            if (workSessionsCompleted > 0 && workSessionsCompleted % 3 === 0) {
                currentPhase = 'longBreak';
                timeLeft = LONG_BREAK_DURATION;
                taskInputSection.style.display = 'none';
            } else {
                currentPhase = 'shortBreak';
                timeLeft = SHORT_BREAK_DURATION;
                 taskInputSection.style.display = 'none';
            }
        } else {
            currentPhase = 'work';
            timeLeft = WORK_DURATION;
            taskInputSection.style.display = 'block';
            taskDescriptionInput.placeholder = `Describe tu Pomodoro #${workSessionsCompleted + 1}...`;
            // No enfocamos automáticamente al cambiar de fase para evitar saltos inesperados
            // taskDescriptionInput.focus();
        }

        currentTaskDescription = '';
        updateTimerDisplay();
    }

    // --- Event Listeners (modificado para guardar estado en input de título) ---
    playPauseButton.addEventListener('click', () => { /* ... igual que antes ... */
         if (isRunning) {
            pauseTimer();
        } else {
            if (Notification.permission === 'default') {
                requestNotificationPermission();
            }
            startTimer();
        }
    });

    resetButton.addEventListener('click', () => { /* ... igual que antes ... */
        if (confirm('¿Estás seguro de que quieres reiniciar todo el ciclo Pomodoro y borrar el historial guardado?')) { // Mensaje actualizado
            resetTimer();
        }
    });

    // ****** MODIFICADO: Guardar título pendiente y estado ******
    function handleOverallTitleInput() {
        const title = overallTitleInput.value.trim();
        // Actualizar siempre nextOverallTitle, incluso si está vacío
        nextOverallTitle = title;
        saveState(); // Guardar el estado que incluye el nuevo nextOverallTitle
    }
    overallTitleInput.addEventListener('input', handleOverallTitleInput); // Guardar mientras escribe
    // overallTitleInput.addEventListener('blur', handleOverallTitleInput); // O guardar al perder foco
    overallTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleOverallTitleInput(); // Asegura que se guarde
            overallTitleInput.blur();
            if (!isRunning && currentPhase === 'work') {
                 taskDescriptionInput.focus();
            }
        }
    });

    taskDescriptionInput.addEventListener('keypress', (e) => { /* ... igual que antes ... */
        if (e.key === 'Enter' && !isRunning && currentPhase === 'work') {
             e.preventDefault();
            startTimer();
        }
    });

    // ****** INICIALIZACIÓN ******
    loadState(); // Cargar estado guardado al iniciar
    // requestNotificationPermission(); // Ya se llama en loadState o al primer play

}); // Fin de DOMContentLoaded