// bersaglio elementi html 
const containerEl = document.getElementById("container");

const playBtnEl = document.getElementById("play-btn")

// creo evento alla pressione del bottone
playBtnEl.addEventListener("click", function () {
    //    creo array di 5 numeri casuali
    let numeriCasuali = [];

    for(let i = 0; i < 5; i++) {
        numeriCasuali.push(Math.floor(Math.random() * 100));
    }

    // creo div dove inserire i numeri casuali
    let randomNumbers = document.createElement("div");
    containerEl.append(randomNumbers);
    randomNumbers.innerText = numeriCasuali
});