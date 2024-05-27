// var n: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var Names = ["a", "b", "c", "d", "e", "f", "i", "j", "k"];
for (var i = 0; i < Names.length; i++) {
    //var index = Names.indexOf("a");
    // var n = `index of c: ${ Names.indexOf("c")}`; //string interpolation
    // var n = "index of a: " + index; // string concatenation
    // console.log(n);
    var n = Names[i];
    var index = Names.indexOf(n);
    var string = n.concat(":", index.toString());
    // var index = Names.indexOf(Names[i]);
    console.log(string);
    // console.log(index);
    // console.log(index);
}
// console.log(Names[0]);
// console.log(Names.indexOf("a"));
// console.log(Names[0]);
// console.log(Names[1]);
// console.log(Names[2]);
// console.log(Names[3]);
// console.log(Names[4]);
// console.log(Names[5]);
// console.log(n);
// console.log(n.indexOf(1));
// console.log(n.indexOf(2));
// console.log(n.indexOf(3));
// console.log(n.indexOf(4));
// console.log(n.indexOf(5));
// console.log(n.indexOf(6));
// console.log(n.indexOf(7));
// console.log(n.indexOf(8));
// console.log(n.indexOf(9));
// console.log(n.indexOf(10));
// console.log(n.length);
