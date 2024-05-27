var Mynumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var Names: string[] = ["a", "b", "c", "d", "e", "f", "i", "j", "k"];
for (let i = 0; i < Mynumber.length; i++) {
  //var index = Names.indexOf("a");
  // var n = `index of c: ${ Names.indexOf("c")}`; //string interpolation
  // var n = "index of a: " + index; // string concatenation
  // console.log(n);
  var Residual_number = Mynumber[i] % 2;
  if (Residual_number == 1) {
    // console.log(ns[i]);
    console.log("odd munber(សេះ)" + Mynumber[i]);
  } else {
    console.log("even munber(គូរ)" + Mynumber[i]);
  }
  //   var index = ns.indexOf(nr);
  // var string = nr.toString();
  // var index = Names.indexOf(Names[i]);
  // console.log(string);
}
