import { Injectable } from '@angular/core';
import { User, AppState } from '../user/user';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
        this.state = 1;
        
      })
      .catch(err => {
        console.log('Somethings is wrong...');
        console.log(err);
        this.state = 0;
      });
  }


  logOut() {
    this.afAuth.auth.signOut()
      .then(res => {
        console.log('sign out successfull!');
        this.state = 0;
    })
      .catch(err => {
        console.log('Somethings is wrong...');
        console.log(err);
        this.state = 0;
    });
  }

}
