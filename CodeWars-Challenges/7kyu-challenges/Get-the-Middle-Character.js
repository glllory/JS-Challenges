// Get the Middle Character

//solution:
function getMiddle(s) {

    var len = s.length;

    if (len % 2 === 0) {
        return s.charAt((len / 2) - 1) + s.charAt((len / 2));
    }
    else {

        return s.charAt(Math.trunc(len / 2));

    }
}