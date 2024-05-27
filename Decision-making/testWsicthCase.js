var str = "abcdef";
var forloop = "";
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
    }
}
function myconvert(str) {
    var con = str.toUpperCase();
    for (var i = 0; i < str.length; i++) {
        // forloop += converttoUppercase(str[i]);
        forloop = forloop + converttoUppercase(str[i]);
        // var c = converttoUppercase(str[i]);
        // forloop = forloop + c;
    }
    return con;
}
console.log(myconvert(str));
console.log(converttoUppercase(str));
// myconvert(str);
