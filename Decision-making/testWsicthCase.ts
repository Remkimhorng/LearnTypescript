var str = "abcd";
var forloop = "";
function converttoUppercase1(str) {
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
for (let i = 0; i < str.length; i++) {
  // forloop += converttoUppercase(str[i]);
  forloop = forloop + converttoUppercase1(str[i]);
  // var c = converttoUppercase(str[i]);
  // forloop = forloop + c;
}
console.log(forloop);
