// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let stringSize = str.length - 1;
    let reverString = '';
    while (stringSize >= 0) {
        reverString += str.charAt(stringSize);
        stringSize--;
    }
    return reverString;
}

module.exports = reverse;
