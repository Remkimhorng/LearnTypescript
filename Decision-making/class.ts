var str = "abcde";
var forloop = "";

class Myclass {
  static converttoUppercase1(str) {
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
  }
}
for (let i = 0; i < str.length; i++) {
  forloop = forloop + " " + Myclass.converttoUppercase1(str[i]);
}
console.log(forloop);
