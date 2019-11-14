export class User {
    email: string;
    password: string;
  
    constructor(e: string, p: string) {
      this.email = e;
      this.password = p;
    }
}

export enum AppState {
  //only able to logIn
  NOTAUTHORIZED = 0,
  
  //can logOut or Go to either Component
  AUTHORIZED = 1,

  //can logOut or Go to Card List
  NEWCARD = 2,
  
  //can Logout or Go to New Card
  CARDLIST = 3,

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
  id: string;

  constructor( fName: string, lName: string, e: string, iText: string, pNum: string, uid?: string){
    this.firstName = fName;
    this.lastName = lName;
    this.email = e;
    this.info = iText;
    this.phoneNumber = pNum;
    this.id = uid || null;
    console.log("BusinessCard constructor called");

  }
}
