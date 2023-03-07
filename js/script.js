// recupero elementi html
const playBtnEl = document.getElementById("play-btn");
const answerBtnEl = document.getElementById("answer-btn");
const gameEl = document.getElementById("game")
const resultEl = document.getElementById("results");
const userAnswerCells = document.querySelectorAll(".user-answer");
const scoreEl = document.getElementById("score");

let randomNumbers;

playBtnEl.addEventListener("click", function() {
    scoreEl.innerText = "";

    for (let i = 0; i < userAnswerCells.length; i++){
        userAnswerCells[i].value = "";
    }

    resultEl.style.display = "none";

    randomNumbers = generateNRandomNumbers(5, 1, 100);
    console.log(randomNumbers)

    const randomNumberCells = document.querySelectorAll(".numeri-casuali");

    showNumbers(randomNumberCells, randomNumbers, 10, resultEl)


});

// risultati
answerBtnEl.addEventListener("click", function () {
    let risposteUtente = getNumbersFromCells(userAnswerCells);

    let numeri = true;
    for (let i = 0; i < randomNumbers.length; i++){
        if(!risposteUtente.includes(randomNumbers[i])) {
            numeri = false;
        }
    }

    if(numeri) {
        scoreEl.innerText="hai vinto";

    } else {
        scoreEl.innerText= "hai perso"
    }
})









// ---------------------------------------
function generateNRandomNumbers(n, min, max) {
    let randomNumbers = [];

    while(randomNumbers.length < n) {
        let randomNumber = generateRandomNumber(min, max);

        if(!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }

    return randomNumbers;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function showNumbers(numberCells, numbers, seconds, answersEl) {
    for(let i = 0; i < numberCells.length; i++) {
        numberCells[i].innerText = numbers[i];
        
    }

    setTimeout(function() {
        for(let i = 0; i < numberCells.length; i++) {
            numberCells[i].innerText = "";
        }

        answersEl.style.display = "flex";
        gameEl.style.display = "none";
    }, seconds * 1000);
}

function getNumbersFromCells(numberCells) {
    let numbers = [];

    for(let i = 0; i < numberCells.length; i++) {
        numbers.push(Number(numberCells[i].value));
    }

    return numbers;
}
