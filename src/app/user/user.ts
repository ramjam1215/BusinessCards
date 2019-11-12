export class User {
    email: string;
    password: string;
  
    constructor(e: string, p: string) {
      this.email = e;
      this.password = p;
    }
}

export const config = {
  collection_endpoint: "businessCards"
}

export class BusinessCard {
  firstName: string;
  lastName: string;
  email: string;
  info: string;
  phoneNumber: string;

  constructor(fName: string, lName: string, e: string, iText: string, pNum: string){
    this.firstName = fName;
    this.lastName = lName;
    this.email = e;
    this.info = iText;
    this.phoneNumber = pNum;

    console.log("BusinessCard constructor called");

  }
}
