import { Injectable } from '@angular/core';
import { User, AppState } from '../user/user';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  state: AppState;

  constructor(private afAuth: AngularFireAuth) {
    this.state = AppState.NOTAUTHORIZED;
   }

   setState(s: number){
     this.state = s;
   }

  login(userInfo: User) {
    this.afAuth.auth.
      signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(res => {
        console.log('Successfully signed in!');
        //this.state = 1;
        this.isLoggedIn = true;
        
      })
      .catch(err => {
        console.log('Somethings is wrong...');
        console.log(err);
        //this.state = 0;
        this.isLoggedIn = false;
      });
  }


  logOut() {
    this.afAuth.auth.signOut()
      .then(res => {
        console.log('sign out successfull!');
        this.isLoggedIn = false;
        //this.state = 0;
    })
      .catch(err => {
        console.log('Somethings is wrong...');
        console.log(err);
        this.isLoggedIn = false;
        //this.state = 0;
    });
  }

}
