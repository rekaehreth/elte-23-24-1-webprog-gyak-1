// Find the excercises on the following link: http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/01

// Exercise 11 - Modification: Select all the negative numbers from a list of numbers
const listOfNumbers = [1, 2, 3, -4, 2.0, -0x16, 0b11]; // input

// Method 1: for loop
const negativeNumbersWithFor = [];
for(i = 0; i < listOfNumbers.length; ++i) { 
    if(listOfNumbers[i] < 0 ) {
        negativeNumbersWithFor.push(listOfNumbers[i])
    } 
}
console.log(negativeNumbersWithFor);

// Method 2: forEach array function 
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const negativeNumbersWithForEach = [];
console.log(listOfNumbers.forEach((element) => {
    if(element < 0 ) {
        negativeNumbersWithForEach.push(element)
    }
}));
console.log(negativeNumbersWithForEach);

// Method 3: filter array function
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
console.log(listOfNumbers.filter((element) => element < 0));



// Exercise 12
let evens = [];

listOfNumbers.forEach((element) => {
    if(element % 2 === 0 ) {
        evens.push(element)
    }
})

// Coding Dojo Kata - Diamond 
// Description: https://codingdojo.org/kata/Diamond/
const letters = ['A', 'B', 'C', 'D'];

function printDiamond(diamondWidth) {
    let diamond = '';
    let width = letters.findIndex((letter) => letter === diamondWidth);
    let i;
    for(i = width; i >= 0; --i) {
        if(i === width + 1) {
            diamond += 
                ' '.repeat(i) +
                letters[width - i] +
                ' '.repeat(i) + '\n';
        } else {
            diamond += 
                ' '.repeat(i) +
                letters[width - i] +
                ' '.repeat(width - i) +
                letters[width - i] +
                ' '.repeat(i) + '\n';
        }
    }

    for(i = 1; i <= width; ++i) {
        if(i === width) {
            diamond += 
                ' '.repeat(i) +
                letters[width - i] +
                ' '.repeat(i) + '\n';
        } else {
            diamond += 
                ' '.repeat(i) +
                letters[width - i] +
                ' '.repeat(width - i) +
                letters[width - i] +
                ' '.repeat(i) + '\n';
        }
    }

    return diamond;
}