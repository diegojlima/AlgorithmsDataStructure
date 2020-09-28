// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {

    return cleanString(stringA) === cleanString(stringB);

    // SOLUCAO MINHA
    // stringA.replace(/[^\w]/g, "").toLowerCase();
    // stringB.replace(/[^\w]/g, "").toLowerCase();

    // if (stringA.length != stringB.length) {
    //     return false;
    // }

    // const arrayA = stringA.split('');
    // const arrayB = stringB.split('');

    // const converA = {};
    // const converB = {};

    // let counter = 0;

    // while (counter < stringA.length) {
    //     populateArray(converA, arrayA[counter]);
    //     populateArray(converB, arrayB[counter]);
    //     counter++;
    // }

    // let validator = true;

    // for (let char in converA) {
    //     if (converB[char]) {
    //         if (converB[char] !== converA[char]) {
    //             validator = false;
    //         }
    //     } else {
    //         validator = false;
    //     }
    // }

    // return validator;
}

// SOLUCAO MINHA
// function populateArray(array, char) {
//     if (array[char]) {
//         array[char]++;
//     }
//     array[char] = 1;
// }

module.exports = anagrams;
