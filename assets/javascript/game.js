// This function remove element from an array
function removeElement(array, element) {
    let index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
    }
}

// This function counts element occurances in an array
function countElement(array, element) {
    let counts = {};
    for (var i = 0; i < array.length; i++) {
        if (!counts.hasOwnProperty(array[i])) {
            counts[array[i]] = 1;
        }
        else {
            counts[array[i]]++;
        }
    }
    return counts[element];
}

// This function finds index of duplicate elements in an array
function findDuplicateElement(array, element) {
    let duplicates = {};
    for (var i = 0; i < array.length; i++) {
        if (duplicates.hasOwnProperty(array[i])) {
            duplicates[array[i]].push(i);
        }
        else if (array.lastIndexOf(array[i]) !== i) {
            duplicates[array[i]] = [i];
        }
    }
    return duplicates[element];
}

// Function that updates the question...
function renderQuestion() {
    document.querySelector(".question").innerHTML = ans_printouts;
}

// Function that updates the score...
function updateScore() {
    document.querySelector(".score").innerHTML = "Wins:   " + score;
}

// Function that updates the try count...
function updateTrialCount() {
    document.querySelector(".trialCount").innerHTML = "Number of Guesses Remaining:   " + trialCount ;
}

// Function that updates the alphabet list...
function updateLettersAll() {
    document.querySelector(".lettersAll").innerHTML = "Letters Left:   " + alphaList;
}

// Function that updates the guess list...
function updateLettersTried() {
    document.querySelector(".lettersTried").innerHTML = "Letters Already Guessed:   " + guesses;
}

// Function that updates the banner...
function updateBanner() {
    if (answers.length > 0) {
        document.querySelector(".banner").innerHTML = "Keep Trying.  "
    }
    else {
        document.querySelector(".banner").innerHTML = "Congratulation, You Win !!! "
    }
}

// Function that updates the guess list...
function showCorrectAnswer() {
    document.querySelector(".correctAnswer").innerHTML = "Correct Answer:  " + answers_copy.join('');
}

//-- user input-answer paiar testing

// let guesses = ['A', 'B', 'C', 'C'];
// let answer = 'O';

// let guesses = ['A', 'B', 'C', 'C'];
// let answer = 'OSCAR';

// let guesses = ['W', 'L', 'M', 'A', 'E', 'X'];
// let answer = 'MAXWELL';


// -- testing input-answer pair with random generator

//let guesses = ['W', 'O', 'L', 'M', 'A', 'E', 'X'];

let guesses = [];
// -- odd squad agent list - The Answer List

let agents_input = ['Otis', 'Olympia', 'Otto', 'Oona', 'Orchild', 'Owen',
    'Odonahue', 'Olaf', 'Obfusco', 'Ohlm', 'Olly', 'Octavia', 'Oren',
    'Ocean', 'Orson', 'Olo', 'Odie', 'Olsen', 'Ori', 'OBeth', 'Orielle', 'Omaha',
    'Orzac', 'Odell', 'Orbot', 'Oda', 'Odalis', 'OReily', 'OHara', 'OGuire', 'OLeary',
    'Odelette'];

let agents = [];
for (i = 0; i < agents_input.length; i++) {
    agents[i] = agents_input[i].toUpperCase();
}



//---- don't change below

// random generator
let answer = agents[Math.floor(Math.random() * agents.length)];

let alphaList = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let answers = answer.split("");
let answers_copy = answer.split("");


let ans_printouts = [];
for (i = 0; i < answers.length; i++) {
    ans_printouts.push('_');
}

let trialCount = 0;
let score = 100;

console.log(alphaList);
console.log(answers);
console.log(guesses);
console.log(ans_printouts);
console.log(answers_copy);
console.log("duplicate  " + findDuplicateElement(answers_copy, 'L'));

console.log(" You have " + answer.length + " letters to guess.");


// console.log("use function:" + countElement(answers, 'A'));

renderQuestion();
//updateBanner();
updateScore();
updateTrialCount();
updateLettersTried();
updateLettersAll();

// -- adding event listener
document.onkeyup = function (event) {
    let userInput = event.key.toUpperCase();
    console.log("user input is " + userInput);

    // -- alogorithm
    //for (let i = 0; i < guesses.length; i++) {
    guesses.push(userInput);
    console.log("guessing " + userInput);
    trialCount += 1;
    if (answers.includes(userInput)) {
        // console.log("right guess " + guesses[i]);
        // console.log("count " + countElement(answers, guesses[i]));
        let count = countElement(answers, userInput);
        // dealing with duplicates in answers array
        for (let j = 0; j < count; j++) {
            //console.log("right guess j " + j);
            ans_printouts[answers_copy.indexOf(userInput)] = userInput;
            removeElement(answers, userInput);
        }

        // dealing with duplicate letters for printouts array
        if (count > 1) {
            let index = findDuplicateElement(answers_copy, userInput);
            for (let j = 1; j < count; j++) {
                //   console.log("inside index "  + index[j] );  
                ans_printouts[index[j]] = userInput;
            }


        }
    }
    else {
        console.log("wrong guess " + userInput);
    }
    if (alphaList.includes(userInput)) {
        // removeElement(alphaList, guesses[i]);
        alphaList[alphaList.indexOf(userInput)] = '_';
    }
    else {
        console.log("you already guess " + userInput + ". Please choose a different letter. ");
    }

    console.log("You have tried " + trialCount + " times so far.");
    console.log("Letters Left [ " + alphaList + " ]");
    console.log("Your Guess: [ " + ans_printouts + " ]");


    //}


    renderQuestion();
    updateBanner();
    updateLettersTried();
    updateLettersAll();
    showCorrectAnswer();
  

    if (answers.length > 0) {
        console.log("****** Keep Trying");
        console.log("Your Guess: [ " + ans_printouts + " ]");
        console.log("Missing letters: " + answers);
        console.log("Correct Answer: " + answer);
        console.log("You have tried [ " + guesses + " ]");
        console.log("Letters Left [ " + alphaList + " ]");
        console.log("You have tried total " + trialCount + " times.");
    }
    else {
        console.log("****** You Win");
        console.log("You Guess the Correct Answer: " + answer);
        console.log("You have tried [ " + guesses + " ]");
        console.log("Letters Left [ " + alphaList + " ]");
        console.log("You have tried total " + trialCount + " times.");
    }
}