// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let lastBiggerNumber = 0;
    let biggerChar = '';
    let array = {};
    for (let char of str) {
        if(array[char]) {
            array[char]++;  
            if (array[char] > lastBiggerNumber) {
                lastBiggerNumber = array[char];
                biggerChar = char;
            }
        }
        array[char] = 1;
    }

    return biggerChar;

}

module.exports = maxChar;
