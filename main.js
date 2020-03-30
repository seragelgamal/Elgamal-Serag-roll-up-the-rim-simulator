// Tim Hortons Roll Up the Rim Simulator
// Serag Elgamal
// 3/30/2020

// variables & html elements
let bcSelect = document.getElementById('bc');
let abSelect = document.getElementById('ab');
let skSelect = document.getElementById('sk');

let button1x = document.getElementById('button1x');
let button5x = document.getElementById('button5x');
let buttonGrandPrize = document.getElementById('buttonGrandPrize');
let button500donuts = document.getElementById('button500donuts');

let playAgain = 0;
let playAgainHtml = document.getElementById('playAgain');
let coffee = 0;
let coffeeHtml = document.getElementById('coffee');
let donuts = 0;
let donutsHtml = document.getElementById('donuts');
let grandPrizes = 0;
let grandPrizesHtml = document.getElementById('grandPrizes');
let total = 0;
let totalHtml = document.getElementById('total');

let result = document.getElementById('result');

let resetButton = document.getElementById('reset');

// event listeners
button1x.addEventListener('click', run);
button5x.addEventListener('click', run5x);
buttonGrandPrize.addEventListener('click', runUntilGrandPrize);
button500donuts.addEventListener('click', runUntil500donuts);
resetButton.addEventListener('click', reset);

// event functions

// runs the simulation just once
function run() {
    // set a random value between 0 and 1
    let n = Math.random();
    // check which province is selected, apply the corresponding prize probability distribution, and print the result
    if (bcSelect.checked) {
        if (n <= .7) {
            total++;
            totalHtml.innerHTML = total;
            playAgain++;
            playAgainHtml.innerHTML = playAgain;
            result.innerHTML = 'Please Play Again';
        } else if (n <= .8) {
            total++;
            totalHtml.innerHTML = total;
            coffee++;
            coffeeHtml.innerHTML = coffee;
            result.innerHTML = 'Free Coffee';
        } else if (n <= .9) {
            total++;
            totalHtml.innerHTML = total;
            donuts++;
            donutsHtml.innerHTML = donuts;
            result.innerHTML = 'Free Donut';
        } else {
            total++;
            totalHtml.innerHTML = total;
            grandPrizes++;
            grandPrizesHtml.innerHTML = grandPrizes;
            result.innerHTML = 'Grand Prize';
        }
    } else if (abSelect.checked) {
        if (n <= .15) {
            total++;
            totalHtml.innerHTML = total;
            playAgain++;
            playAgainHtml.innerHTML = playAgain;
            result.innerHTML = 'Please Play Again';
        } else if (n <= .55) {
            total++;
            totalHtml.innerHTML = total;
            coffee++;
            coffeeHtml.innerHTML = coffee;
            result.innerHTML = 'Free Coffee';
        } else if (n <= .95) {
            total++;
            totalHtml.innerHTML = total;
            donuts++;
            donutsHtml.innerHTML = donuts;
            result.innerHTML = 'Free Donut';
        } else {
            total++;
            totalHtml.innerHTML = total;
            grandPrizes++;
            grandPrizesHtml.innerHTML = grandPrizes;
            result.innerHTML = 'Grand Prize';
        }
    } else {
        if (n <= .7) {
            total++;
            totalHtml.innerHTML = total;
            playAgain++;
            playAgainHtml.innerHTML = playAgain;
            result.innerHTML = 'Please Play Again';
        } else if (n <= .71) {
            total++;
            totalHtml.innerHTML = total;
            coffee++;
            coffeeHtml.innerHTML = coffee;
            result.innerHTML = 'Free Coffee';
        } else if (n <= .72) {
            total++;
            totalHtml.innerHTML = total;
            donuts++;
            donutsHtml.innerHTML = donuts;
            result.innerHTML = 'Free Donut';
        } else {
            total++;
            totalHtml.innerHTML = total;
            grandPrizes++;
            grandPrizesHtml.innerHTML = grandPrizes;
            result.innerHTML = 'Grand Prize';
        }
    }
}

// runs the simulation 5 times
function run5x() {
    for (x = 1; x <= 5; x++) {
        run();
    }
}

// runs the simulation until a grand prize is won
function runUntilGrandPrize() {
    let previousGrandPrizes = grandPrizes;
    while (previousGrandPrizes == grandPrizes) {
        run();
    }
}

// runs the simulation until 500 free donuts are won
function runUntil500donuts() {
    let donutsWon = 0;
    while (donutsWon < 500) {
        run();
        if (result.innerHTML == 'Free Donut') {
            donutsWon++;
        }
    }
}

// resets the results
function reset() {
    total = 0;
    totalHtml.innerHTML = 0;
    playAgain = 0;
    playAgainHtml.innerHTML = 0;
    coffee = 0;
    coffeeHtml.innerHTML = 0;
    donuts = 0;
    donutsHtml.innerHTML = 0;
    grandPrizes = 0;
    grandPrizesHtml.innerHTML = 0;
    result.innerHTML = '---';
}