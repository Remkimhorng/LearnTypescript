export class User {
  //field
  public id: number;
  username: string;
  password: string;
  gender: gender; // call class gender
  date_of_birth: string;
  address: string;
  phone: string;
  //constructor
  // constructor() {}
}
export class gender {
  id: number;
  name: string;
  desciption: string;
}
