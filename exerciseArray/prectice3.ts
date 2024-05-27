// var n: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var Names: string[] = ["a", "b", "c", "d", "e", "f", "i", "j", "k"];
for (let i = 0; i < Names.length; i++) {
  //var index = Names.indexOf("a");
  // var n = `index of c: ${ Names.indexOf("c")}`; //string interpolation
  // var n = "index of a: " + index; // string concatenation
  // console.log(n);
  var n = Names[i];
  var index = Names.indexOf(n);
  var string = n.concat(":", index.toString());
  // var index = Names.indexOf(Names[i]);
  console.log(string);
}
