var str = "abcde";
var forloop = "";
var Myclass = /** @class */ (function () {
    function Myclass() {
    }
    Myclass.converttoUppercase1 = function (str) {
        var con = str.toLowerCase();
        switch (con) {
            case "a":
                return "A";
            case "b":
                return "B";
            case "c":
                return "C";
            case "d":
                return "D";
            case "e":
                return "E";
            default:
                return str;
        }
    };
    return Myclass;
}());
for (var i = 0; i < str.length; i++) {
    forloop = forloop + " " + Myclass.converttoUppercase1(str[i]);
}
console.log(forloop);
