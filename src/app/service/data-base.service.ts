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

//Firestore ref
//URL: https://itnext.io/how-to-crud-in-angular-firebase-firestore-456353d7c62

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  
  cardForm: FormGroup;
  
  constructor(private dataBase: AngularFirestore, private formBuilder: FormBuilder) {
    this.cardForm = this.formBuilder.group({
      'firstName':    ['', Validators.required],
      'lastName':     ['', Validators.required],
      'email':        ['', Validators.required],
      'info':         ['', Validators.required],
      'phoneNumber':  ['', Validators.required]
    });
   }

   getBusinessCards(){
     return this.dataBase.collection(config.collection_endpoint).snapshotChanges();
   }

  checkCardForm(bCard: BusinessCard) {
    console.log("fName:" + bCard.firstName);
    console.log("lName:" + bCard.lastName);
    console.log("email:" + bCard.email);
    console.log("Info:" + bCard.info);
    console.log("phone#:" + bCard.phoneNumber);
    
  }

  clearForm(){
    this.cardForm.reset();
  }
  
  
  createBusinessCard(data) {
    return new Promise<any>((resolve, reject) => {
      this.dataBase
          .collection(config.collection_endpoint)
          .add(data)
          .then(res =>{}, err => reject(err));
    });
  }



}
