import { Injectable } from '@angular/core';
import { BusinessCard, config } from '../user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { 
  AngularFirestore,
  AngularFirestoreModule,
  AngularFirestoreDocument,
  AngularFirestoreCollection 
} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { reject } from 'q';

//Firestore ref
//URL: https://itnext.io/how-to-crud-in-angular-firebase-firestore-456353d7c62

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  
  cardForm: FormGroup;
  bCheck: boolean = false;

  constructor(private dataBase: AngularFirestore, private formBuilder: FormBuilder) {
    this.cardForm = this.formBuilder.group({
      'firstName':    ['', Validators.required],
      'lastName':     ['', Validators.required],
      'email':        ['', Validators.required],
      'info':         ['', Validators.required],
      'phoneNumber':  ['', Validators.required]
    });
   }

  clearForm(){
    this.cardForm.reset();
  }


  getBusinessCards(){
    return this.dataBase.collection(config.collection_endpoint).snapshotChanges();
  }
 
  checkCardForm(){
    console.log(this.cardForm.value);
    this.clearForm();
  }


  sendForm(): boolean{

    if(this.cardForm.invalid){
      this.clearForm();
      console.log("invalid form");
      this.bCheck = false;
      return this.bCheck;
    }
    
    let data = this.cardForm.value;
    console.log(data);    
      
    this.createBusinessCard(data)
        .then(res =>{
          this.clearForm();
          console.log("new business Card added");
          console.log(res);
          this.bCheck = true;
        })
       
        .catch(err =>{
          this.clearForm();
          console.log('Somethings is wrong...');
          console.log(err);
          this.bCheck = false;
        });

    return this.bCheck;
    
  }

  createBusinessCard(data) {
    return new Promise<any>((resolve, reject) => {
      this.dataBase
          .collection(config.collection_endpoint)
          .add(data);
          //.then(res =>{}, err => reject(err));
    });
  }

  /*
  practice(uid: string){
    let data = this.cardForm.value;
    return new Promise<any>((resolve, reject) => {
      this.dataBase.collection(config.collection_endpoint)
      .doc(uid)
      .set(data, {merge: true});
    });
  }
  */

  //not great, need to test and fix later
  updateBusinessCard(uid: string){

    if(this.cardForm.invalid){
      this.clearForm();
      console.log("invalid form");
      return;
    }

    let data = this.cardForm.value;
    return this.dataBase
      .collection(config.collection_endpoint)
      .doc(uid)
      .set(data, {merge: true});

  }

  deleteBusinessCard(uid:string){
    return this.dataBase.collection(config.collection_endpoint)
    .doc(uid)
    .delete();
  }

}


   /*
  checkCardForm(bCard: BusinessCard) {
    console.log("UID:" + bCard.id);
    console.log("fName:" + bCard.firstName);
    console.log("lName:" + bCard.lastName);
    console.log("email:" + bCard.email);
    console.log("Info:" + bCard.info);
    console.log("phone#:" + bCard.phoneNumber);
    this.clearForm();
  }
  */
