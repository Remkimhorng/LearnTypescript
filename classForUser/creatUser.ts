import { User, gender } from "./classUser";

var user1: string[] = [];
var users2: User[] = [];
// var users3: gender[] = [];

//Assing object to classgender
const objg = new gender();
objg.id = 1;
objg.name = "You are my Name";
objg.desciption = "gender";
// users3.push(objg);

//create new object and push to array of object
const obj = new User();
obj.id = 1;
obj.username = "Horng1";
obj.password = "1234";
obj.gender = objg;
obj.date_of_birth = "03-23-20002";
obj.address = "Phnom Phenh";
obj.phone = "08872345";
users2.push(obj);
var obj2 = new User();
obj2.id = 2;
obj2.username = "Horng2";
obj2.password = "9999";
obj2.gender = objg;
obj2.date_of_birth = "03-23-20002";
obj2.address = "Phnom Phenh";
obj2.phone = "999999";
users2.push(obj2);
var obj3 = new User();
obj3.id = 3;
obj3.username = "Horng3";
obj3.password = "9999";
obj3.gender = objg;
obj3.date_of_birth = "03-23-20002";
obj3.address = "Phnom Phenh";
obj3.phone = "999999";
users2.push(obj3);

var obj4 = new User();
obj4.id = 4;
obj4.username = "Horng4";
obj4.password = "9999";
obj4.gender = objg;
obj4.date_of_birth = "03-23-20002"; //= assign value
obj4.address = "Phnom Phenh";
obj4.phone = "999999";
users2.push(obj4);
// users2.splice(1, 1);//remove
obj4.username = "roth000"; //
// var userjson = JSON.stringify(user1);
console.log(users2);
// console.log(users3);
