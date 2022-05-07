const wordsToGuess = [
    "ANIMAL",
    "PERRO",
    "GATO",
    "TORTUGA",
    "SERPIENTE",
    "CHANCHO",
    "GUSANO",
    "PAJARO",
    "BABOSA",
    "CARACOL",
];

let answer = '';
let mistakes = 0;
let guessed = [];
let wordStatus = null; 

const menu = document.getElementsByClassName('main-menu__container');
const pantalla = document.getElementById('main-menu');
const title = document.getElementById('title');
const footer = document.getElementById('footer');
const attemp = document.createElement('P');
const keyBoard = document.createElement('div');
const wordSpotlight = document.createElement('div');
const resetBtn = document.createElement('div');

function generateRandomWord(){ 
    answer = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    document.getElementById('respuesta__derrota').innerHTML = answer;
    document.getElementById('respuesta__victoria').innerHTML = answer;
}

function generateButtons() {
    let buttonsHTML = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').map(letter =>
      `
        <button
          class="keyBoard"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyBoard').innerHTML = buttonsHTML;
}

function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
      checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
      updateMistakes();
      checkIfGameLost();
      updateHangman();
    }
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}
  
function checkIfGameLost() {
    if (mistakes === 6) {

        const modal = document.getElementById("myModalDerrota");
        const span = document.getElementsByClassName("close")[0];
        const keyBoard = document.getElementById('keyBoard');
        
        keyBoard.innerHTML = '';

        resetBtn.classList.add('resetBTN');
        
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                }
            }
    }
}

function checkIfGameWon() {
    if (wordStatus === answer) {

        const modalVictoria = document.getElementById("myModalVictoria");
        const span = document.getElementsByClassName("close")[1];
        const keyBoard = document.getElementById('keyBoard');
        
        keyBoard.innerHTML = '';

        resetBtn.classList.add('resetBTN');

        modalVictoria.style.display = "block";

        span.onclick = function() {
            modalVictoria.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modalVictoria) {
                modalVictoria.style.display = "none";
            }
        }
    }

    
}

function updateHangman(){
    drawCanvas();
}

function reset() {
    mistakes = 0;
    guessed = [];

    resetBtn.classList.remove('resetBTN');

    startGame();
    generateRandomWord();
    guessedWord();
    updateMistakes();
    generateButtons();

    const msjLose = document.getElementById('keyBoard');
    msjLose.classList.remove('msjLose');
}

function startGame(){

    title.classList.add('title-in-game');

    pantalla.innerHTML='<canvas id="hangman" height="360px" width="294px"></canvas>';  

    attemp.classList.add('attemp');
    attemp.innerHTML = 'Intentos <span id="mistakes">0</span> de <span>6</span>';
    pantalla.appendChild(attemp);

    wordSpotlight.classList.add('wordSpotlight__content');
    wordSpotlight.innerHTML = '<p id="wordSpotlight"></p>'
    pantalla.appendChild(wordSpotlight);

    keyBoard.id ="keyBoard";
    pantalla.appendChild(keyBoard);

    footer.innerHTML='<i id="back-btn" class="fa-solid fa-angles-left fa-2x"></i>';
    const backBtn = document.getElementById('back-btn').onclick= function(){
        location.reload();
    };

    resetBtn.innerHTML = ('<i id="reset" class="fa-solid fa-arrow-rotate-right fa-2x"></i>');
    footer.appendChild(resetBtn);
    resetBtn.onclick= function(){
        reset();
    };

    generateRandomWord();
    guessedWord();
    drawCanvas();
    generateButtons();
}

function drawCanvas(){

    const canvas = document.querySelector("#hangman");
    const ctx = canvas.getContext("2d");

    function dibujarBase() {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(0, 355);
        ctx.lineTo(294, 355);
        ctx.stroke();
    }

    function dibujarPaloBase() {
        ctx.beginPath();
        ctx.lineWidth = "4.5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(80, 3);
        ctx.lineTo(80, 355);
        ctx.stroke();
    }
      
    function dibujarPaloTop() {
        ctx.beginPath();
        ctx.lineWidth = "4.5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(80, 5);
        ctx.lineTo(258, 5);
        ctx.stroke();
    }
      
    function dibujarPaloHead() {
        ctx.beginPath();
        ctx.lineWidth = "4.5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(258, 3);
        ctx.lineTo(258, 55);
        ctx.stroke();
    }
      
    function dibujarCabeza() {
        ctx.beginPath();
        ctx.arc(258, 85, 30, 0, 2 * 3.14);
        ctx.lineWidth = "4.5";
        ctx.moveTo(258, 3);
        ctx.stroke();
    }
      
    function dibujarCuerpo() {
        ctx.beginPath();
        ctx.lineWidth = "4.5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(258, 115);
        ctx.lineTo(258, 235);
        ctx.stroke();
    }
      
    function dibujarBrazoIzq() {
        ctx.beginPath();
        ctx.lineWidth = "4.5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(258, 135);
        ctx.lineTo(226, 195);
        ctx.stroke();
    }
      
    function dibujarBrazoDer() {
        ctx.beginPath();
        ctx.lineWidth = "4.5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(258, 135);
        ctx.lineTo(290, 195);
        ctx.stroke();
    }
      
    function dibujarPiernaIzq() {
        ctx.beginPath();
        ctx.lineWidth = "4.5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(258, 234);
        ctx.lineTo(226, 315);
        ctx.stroke();
    }
      
    function dibujarPiernaDer() {
        ctx.beginPath();
        ctx.lineWidth = "4.5";
        ctx.strokeStyle = "#0A3871";
        ctx.moveTo(258, 234);
        ctx.lineTo(290, 315);
        ctx.stroke();
    }
      
    dibujarBase();
    dibujarPaloBase();
    dibujarPaloTop();
    dibujarPaloHead();
    dibujarPaloHead(); 
    
    switch(mistakes){
        case 1: dibujarCabeza();
        break;

        case 2: dibujarCuerpo();
        break;

        case 3: dibujarBrazoIzq();
        break;

        case 4: dibujarBrazoDer();
        break;

        case 5: dibujarPiernaIzq();
        break;

        case 6: dibujarPiernaDer();
        break;
    }
}

function addWord(){

    const newWordModal = document.getElementById("AddWordModal");
    const span = document.getElementsByClassName("close")[2];
    const modalText = document.getElementById('modalText');
    const done = document.getElementById('doneBtn');

    newWordModal.style.display = "block";

    span.onclick = function() {
        newWordModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == newWordModal) {
            newWordModal.style.display = "none";
        }
    }

    done.onclick = function(){

        newWordModal.style.display = "none";
        answer = modalText.value.toUpperCase();

        let pattern = /[^A-Z]/g;
        let patternResult = pattern.test(answer);

        if(patternResult == false && answer.length != ''){
            startGame();
            answer = modalText.value.toUpperCase();
            document.getElementById('respuesta__derrota').innerHTML = answer;
            document.getElementById('respuesta__victoria').innerHTML = answer;
            guessedWord();
        }
    }
}