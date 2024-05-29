import { MyNewClass1 } from "./classMynewclass";
export class MyFunction1 {
  //   constructor() {}
  myconvert3(str): string {
    var forloop = "";

    var m = new MyNewClass1();
    for (let i = 0; i < str.length; i++) {
      forloop = forloop + " " + m.converttoUppercase3(str[i]);
    }
    return forloop;
  }
}
