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

//-- user input test

// let guesses = ['A', 'B', 'C', 'C'];
// let answer = 'O';

// let guesses = ['A', 'B', 'C', 'C'];
// let answer = 'OSCAR';

// let guesses = ['W', 'L', 'M', 'A', 'E', 'X'];
// let answer = 'MAXWELL';

// -- odd squad agent list

let agents_input = ['O', 'Otis', 'Olympia', 'Otto', 'Oona', 'Orchild', 'Owen',
    'Odonahue', 'Olaf', 'Obfusco', 'Ohlm', 'Olly', 'Octavia', 'Oren',
    'Ocean', 'Orson', 'Olo', 'Odie', 'Olsen', 'Ori', 'OBeth', 'Orielle', 'Omaha',
    'Orzac', 'Odell', 'Orbot', 'Oda', 'Odalis', 'OReily', 'OHara', 'OGuire', 'OLeary',
    'Odelette'];

let agents = [];
for (i = 0; i < agents_input.length; i++) {
    agents[i] = agents_input[i].toUpperCase();
}

// random generator
let guesses = ['W', 'O', 'L', 'M', 'A', 'E', 'X'];
let answer = agents[Math.floor(Math.random() * agents.length)];

//---- don't change below

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


console.log(alphaList);
console.log(answers);
console.log(guesses);
console.log(ans_printouts);
console.log(answers_copy);
console.log("duplicate  " + findDuplicateElement(answers_copy, 'L'));

console.log(" You have " + answer.length + " letters to guess.");


// console.log("use function:" + countElement(answers, 'A'));



// alogorithm
for (let i = 0; i < guesses.length; i++) {
    console.log("guessing " + guesses[i]);
    trialCount += 1;
    if (answers.includes(guesses[i])) {
        // console.log("right guess " + guesses[i]);
        // console.log("count " + countElement(answers, guesses[i]));
        let count = countElement(answers, guesses[i]);
        // dealing with duplicates in answers array
        for (let j = 0; j < count; j++) {
            //console.log("right guess j " + j);
            ans_printouts[answers_copy.indexOf(guesses[i])] = guesses[i];
            removeElement(answers, guesses[i]);
        }

        // dealing with duplicate letters for printouts array
        if (count > 1) {
            let index = findDuplicateElement(answers_copy, guesses[i]);
            for (let j = 1; j < count; j++) {
                //   console.log("inside index "  + index[j] );  
                ans_printouts[index[j]] = guesses[i];
            }


        }
    }
    else {
        console.log("wrong guess " + guesses[i]);
    }
    if (alphaList.includes(guesses[i])) {
        // removeElement(alphaList, guesses[i]);
        alphaList[alphaList.indexOf(guesses[i])] = '_';
    }
    else {
        console.log("you already guess " + guesses[i] + ". Please choose a different letter. ");
    }

    console.log("You have tried " + trialCount + " times so far.");
    console.log("Letters Left [ " + alphaList + " ]");
    console.log("Your Guess: [ " + ans_printouts + " ]");


}

if (answers.length > 0) {
    console.log("****** You Lose");
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