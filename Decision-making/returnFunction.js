var str = "abcdefghijklmnopqrstuvwxyz";
var forloop = " ";
function converttoUppercase(str) {
    var con = str.toLowerCase();
    switch (con) {
        case "a": {
            return "A";
        }
        case "b": {
            return "B";
        }
        case "c": {
            return "C";
        }
        case "d": {
            return "D";
        }
        case "e": {
            return "E";
        }
        case "f": {
            return "F";
        }
        case "g": {
            return "G";
        }
        case "h": {
            return "H";
        }
        case "i": {
            return "I";
        }
        case "j": {
            return "J";
        }
        case "k": {
            return "K";
        }
        case "l": {
            return "L";
        }
        case "m": {
            return "M";
        }
        case "n": {
            return "N";
        }
        case "o": {
            return "O";
        }
        case "p": {
            return "P";
        }
        case "q": {
            return "Q";
        }
        case "r": {
            return "R";
        }
        case "s": {
            return "S";
        }
        case "t": {
            return "T";
        }
        case "u": {
            return "U";
        }
        case "v": {
            return "V";
        }
        case "w": {
            return "W";
        }
        case "x": {
            return "X";
        }
        case "y": {
            return "Y";
        }
        case "z": {
            return "Z";
        }
        default: {
            str(" ");
        }
    }
}
function myconvert1(str) {
    //   var con = str.toUpperCase();
    for (var i = 0; i < str.length; i++) {
        forloop = forloop + converttoUppercase(str[i]);
    }
    return forloop;
}
console.log(myconvert(str));
