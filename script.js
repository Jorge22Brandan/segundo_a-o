document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    const passingScore = 6;
    const questions = [
        { text: "¿Cuál es el número atómico del Hidrógeno?", options: ["1", "2", "3", "4"], correct: "1" },
        { text: "¿Cuál es el símbolo del Oxígeno?", options: ["O", "Ox", "O2", "O3"], correct: "O" },
        { text: "¿Quién es el creador de la tabla periódica?", options: ["Isaac Newton", "Albert Einstein", "Dmitri Mendeléyev", "Marie Curie"], correct: "Dmitri Mendeléyev" },
        // Agrega aquí más preguntas hasta llegar a 30
        { text: "¿Cuántos grupos tiene la tabla periódica?", options: ["8", "16", "18", "10"], correct: "18" },
        { text: "Un ejemplo de metal es:", options: ["C", "N", "Pb", "Po"], correct: "Pb" },
        { text: "Un ejemplo de no metal es:", options: ["C", "Mn", "Pb", "He"], correct: "C" },
        { text: "Un ejemplo de metaloide es:", options: ["C", "Mn", "Pb", "Ge"], correct: "Ge" },
        { text: "La masa atómica del Co es:", options: ["59", "27", "58", "8"], correct: "59" },
        { text: "Un ejemplo de gas inerte es:", options: ["C", "Ar", "Pb", "Po"], correct: "Ar" },
        { text: "La tabla periodica tiene:", options: ["6 periodos", "7 periodos", "18 periodos", "8 periodos"], correct: "8 periodos" },
        { text: "El Z de el Ca es:", options: ["20", "30", "40", "2"], correct: "20" },
        { text: "El número atómico se representa con la letra:", options: ["Ze", "N", "Z", "A"], correct: "Z" },
        { text: "El número másico se representa con la letra:", options: ["Ze", "N", "Z", "A"], correct: "A" },
        { text: "El número de neutrones se representa con la letra:", options: ["Ze", "N", "Z", "A"], correct: "N" },
        { text: "El numero de N se calcula con:", options: ["A-Z", "A + N", "Z - A", "Z x A"], correct: "A-Z" },
        { text: "El numero atómico representa:", options: ["Número de neutrones", "Número de protones", "Numero de electrones", "Nucleo"], correct: "Número de protones" },
        { text: "La estructura cristalina del hierro es:", options: ["Cúbica de cuerpo centrado", "Cúbica simple", "Cúbica de cara centrada", "Hexagonal"], correct: "Cúbica de cuerpo centrado" },
        { text: "El Xe tiene un valor de electronegatividad igual a:", options: ["0", "3,06", "54", "8"], correct: "0" },
        { text: "El Cl tiene electronegatividad de 3,0 y el Ca 1,0 ¿Quién atraerá al electrón hacia si mismo?:", options: ["Cl", "Ca"], correct: "Cl" },
        { text: "Los electrones de valencia del S son", options: ["8", "5", "6", "32"], correct: "6" },
        { text: "La distribución de electrones en niveles del Ca es:", options: ["8-8-2", "2-6-8-2", "8-2", "2-8-8-2"], correct: "2-8-8-2" },
        { text: "Un ejemplo de metal pobre es:", options: ["He", "Bi", "Po", "Si"], correct: "Bi" },
        { text: "La masa atómica redondeada del Hg es :", options: ["201", "200", "202", "200,6"], correct: "201" },
        { text: "La ubicación del Cr es:", options: ["Grupo 6 periodo 4 ", "Grupo 4 periodo 6", "Grupo 4 periodo 16", "Grupo 10 periodo 4 "], correct: "Grupo 6 periodo 4" },
        { text: "La densidad del Os es :", options: ["23", "22,6", "20,2", "26,0"], correct: "22,6" },
        { text: "La unidad de medida de la densidad es :", options: ["m/ml", "l/ml", "g/ml", "km/h"], correct: "g/ml" }, 
        { text: "La configuración electrónica del O es :", options: ["1s2 2s2 2p4", "1s2 2s2 2p5", "1s2 2s2 3s6", "1s2 2s2 2p3"], correct: "1s2 2s2 2p4" },
        { text: "Los símbolos quimicos se escriben con letras mayúsculas :", options: ["Verdadero", "Falso"], correct: "Falso" },
        { text: "La TP es :", options: ["Un registro de elementos químicos", "Una tabla con letras y números", "Un documento de elementos químicos", "Datos de elementos"], correct: "Un registro de elementos químicos" },
        { text: "Un ejemplo de elemento liquido es :", options: ["Fr", "FR", "B", "H"], correct: "Fr" },

    ];


    const questionContainer = document.getElementById('question-container');
    const scoreContainer = document.getElementById('score');
    const userForm = document.getElementById('user-form');
    const userInfoSection = document.getElementById('user-info');
    const gameSection = document.getElementById('game');
    const scoreboardBody = document.getElementById('scoreboard-body');

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        alert(`¡Bienvenido, ${firstName} ${lastName}!`);
        userInfoSection.style.display = 'none';
        gameSection.style.display = 'block';
        showQuestion(questions[currentQuestionIndex]);
    });

    function showQuestion(question) {
        questionContainer.innerHTML = `<p>${question.text}</p>`;
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                if (option === question.correct) {
                    score += 0.33; // Cada pregunta vale aproximadamente 0.33 puntos
                }
                scoreContainer.textContent = score.toFixed(2);
                nextQuestion();
            });
            questionContainer.appendChild(button);
        });
    }

    let currentQuestionIndex = 0;
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            questionContainer.innerHTML = `<p>¡Juego terminado! Tu puntuación final es: ${score.toFixed(2)}</p>`;
            if (score >= passingScore) {
                questionContainer.innerHTML += '<p>¡Felicidades, has aprobado!</p>';
            } else {
                questionContainer.innerHTML += '<p>Lo siento, no has aprobado.</p>';
            }
            addScoreToTable();
        }
    }

    function addScoreToTable() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${score.toFixed(2)}</td>`;
        scoreboardBody.appendChild(newRow);
    }

    showQuestion(questions[currentQuestionIndex]);


   
});

document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.elemento');
    const infoElemento = document.getElementById('info-elemento');

    elementos.forEach(elemento => {
        elemento.addEventListener('click', function() {
            const simbolo = this.getAttribute('data-simbolo');
            const nombre = this.getAttribute('data-nombre');
            const numero = this.getAttribute('data-numero');
            infoElemento.textContent = `Símbolo: ${simbolo}, Nombre: ${nombre}, Número Atómico: ${numero}`;
        });
    });
});


