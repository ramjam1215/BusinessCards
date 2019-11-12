import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService: LoginService){}

  toRoute(): boolean{
    return this.loginService.isLoggedIn();
  }

  logOut(): void{
    console.log('logOut ref clicked');
    this.loginService.logOut();
  }

  toTest():void {
    console.log('Testing route to Not Found');
    this.loginService.enableExit(true);
  }

  //basically returning false for right now
  //testing router guard
  //While testing... this hides the logout right now
  didLogin(): boolean{
    return this.loginService.toCard();
  }
}
