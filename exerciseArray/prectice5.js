var Mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var Names: string[] = ["a", "b", "c", "d", "e", "f", "i", "j", "k"];
for (var i = 0; i < Mynumber.length; i++) {
  var Residual_number = Mynumber[i] % 2;
  if (Residual_number == 1) {
    console.log(Mynumber[i]);
  } else {
    console.log("h" + Mynumber[i]);
  }
}
