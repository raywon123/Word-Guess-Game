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

//-- user input test

let guesses = ['A', 'B', 'C', 'C'];
let answer = 'OSCAR';

// let guesses = ['W', 'L', 'M', 'A', 'E', 'X'];
// let answer = 'MAXWELL';

//---- don't change below

let alphaList = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let answers = answer.split("");
let answers_tmp = answer.split("");

let printout=[];
for (i = 0; i < answers.length ; i++) {
    printout.push('_');
}

console.log(alphaList);
console.log(answers);
console.log(guesses);
console.log(printout);

console.log(" You have " + answer.length + " letters to guess.");

// console.log("use function:" + countElement(answers, 'A'));



// alogorithm
for (let i = 0; i < guesses.length; i++) {
    console.log("guessing " + guesses[i]);
    if (answers.includes(guesses[i])) {
        // console.log("right guess " + guesses[i]);
        // console.log("count " + countElement(answers, guesses[i]));
        let count = countElement(answers, guesses[i]);
        for (let j = 0; j < count; j++) {
            // console.log("right guess j " + j);
            printout[answers_tmp.indexOf(guesses[i])] = guesses[i];
            removeElement(answers, guesses[i]);
        }
    }
    else {
        console.log("wrong guess " + guesses[i]);
    }
    if (alphaList.includes(guesses[i])) {
        removeElement(alphaList, guesses[i]);
    }
    else {
        console.log("you already guess " + guesses[i] + ". Please choose a different letter. ");
    }

    console.log("Letters Left [ " + alphaList + " ]");
    console.log("Your Guess: [ " + printout + " ]");


}

if (answers.length > 0) {
    console.log("****** You Lose");
    console.log("Missing letters: " + answers);
    console.log("Correct Answer: " + answer);
}
else {
    console.log("****** You Win");
    console.log("You Guess the Correct Answer: " + answer);
}