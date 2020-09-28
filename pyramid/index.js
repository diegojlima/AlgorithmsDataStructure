// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, stair = '') {

    if (n === row) {
        return;
    }

    if (stair.length === (n*2)-1) {
        console.log(stair);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((n*2-1)/2);

    if (midpoint - row <= stair.length && midpoint + row >= stair.length) {
        stair += '#';
    } else {
        stair += ' ';
    }
    pyramid(n, row, stair);

}

module.exports = pyramid;
