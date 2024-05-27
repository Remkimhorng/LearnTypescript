var str = "1234567890";
var forloop = "";
var MyNewClass = /** @class */ (function () {
    function MyNewClass() {
    }
    MyNewClass.prototype.converttoUppercase3 = function (str) {
        var con = +str;
        switch (con) {
            case 1: {
                return "One";
            }
            case 2: {
                return "Two";
            }
            case 3: {
                return "Three";
            }
            case 4: {
                return "Four";
            }
            case 5: {
                return "Five";
            }
            case 6: {
                return "Six";
            }
            case 7: {
                return "Seven";
            }
            case 8: {
                return "Eight";
            }
            case 9: {
                return "Nine";
            }
            case 0: {
                return "Ten";
            }
            default:
                return str;
        }
    };
    return MyNewClass;
}());
var MyFunction = /** @class */ (function () {
    function MyFunction() {
    }
    MyFunction.prototype.myconvert3 = function (str) {
        var m = new MyNewClass();
        for (var i = 0; i < str.length; i++) {
            forloop = forloop + " " + m.converttoUppercase3(str[i]);
        }
        return forloop;
    };
    return MyFunction;
}());
var M = new MyFunction();
console.log(M.myconvert3(str));
