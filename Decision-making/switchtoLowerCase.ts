var input = "Lgbt"; //Female
input = input.toLowerCase();
switch (input) {
  case "female": {
    console.log("you are femail");
    break;
  }
  case "male": {
    console.log("you are male");
    break;
  }
  case "lgbt": {
    console.log("you are lgbt");
    break;
  }
  default: {
    console.log("your gender is unknown");
    break;
  }
}
