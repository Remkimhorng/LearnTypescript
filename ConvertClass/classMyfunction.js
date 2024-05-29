"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFunction1 = void 0;
var classMynewclass_1 = require("./classMynewclass");
var MyFunction1 = /** @class */ (function () {
    function MyFunction1() {
    }
    //   constructor() {}
    MyFunction1.prototype.myconvert3 = function (str) {
        var forloop = "";
        var m = new classMynewclass_1.MyNewClass1();
        for (var i = 0; i < str.length; i++) {
            forloop = forloop + " " + m.converttoUppercase3(str[i]);
        }
        return forloop;
    };
    return MyFunction1;
}());
exports.MyFunction1 = MyFunction1;
