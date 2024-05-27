var str = "abcd";
// for (var i = 0; i < str.length; i++) {
//   console.log(str[0]);
// }
// if () {
//   console.log("");
// }
// console.log(str[0]);
// var index = str[0];
// // for ()
// if (index == "a") {
//   console.log("A");
// }
var forloop = "";
function convertto(str) {
    var con = str.toLowerCase();
    if (con == "a") {
        return "A";
    }
    else if (con == "b") {
        return "B";
    }
    else if (con == "c") {
        return "C";
    }
    else {
        return "D";
    }
}
for (var i = 0; i < str.length; i++) {
    //   console.log(str[i]);
    forloop += convertto(str[i]);
}
console.log(forloop);
// string(str[3]);
// console.log(index);
// console.log("A");
//ប្រសិនបើ string of index 0 = a
// print A
