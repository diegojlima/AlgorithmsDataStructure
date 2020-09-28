// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let array = str.split(' ');
    let phrase = '';

    for (let word of array) {
        phrase += word[0].toUpperCase() + word.slice(1) + ' ';
    }
   return phrase.slice(0, phrase.length - 1);
}

module.exports = capitalize;
