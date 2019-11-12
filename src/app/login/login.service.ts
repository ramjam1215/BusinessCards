import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private bCheck = false;

  private bTemp = false;
  constructor(private afAuth: AngularFireAuth) { }

  login(userInfo: User) {
    this.afAuth.auth.
      signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(res => {
        console.log('Successfully signed in!');
        this.bCheck = true;
        
      })
      .catch(err => {
        console.log('Somethings is wrong...');
        console.log(err);
      });
  }

  isLoggedIn(): boolean {
    return this.bCheck;
  }

  logOut() {
    this.afAuth.auth.signOut()
      .then(res => {
        console.log('sign out successfull!');
        this.bCheck = false;
        this.enableExit(false);
    })
      .catch(err => {
        console.log('Somethings is wrong...');
        console.log(err);
        //maybe need these?
        this.bCheck = false;
        this.enableExit(false);
    });
  }

  toCard(): boolean { return this.bTemp; }
  enableExit(b:boolean){ this.bTemp = b; }
}
