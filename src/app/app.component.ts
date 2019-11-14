import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService: LoginService){}

  getState(): number{ return this.loginService.state }

  logOut(): void{
    console.log('logOut ref clicked');
    this.loginService.logOut();
  }

  changeState(s: number){
    this.loginService.setState(s);
  }

}
