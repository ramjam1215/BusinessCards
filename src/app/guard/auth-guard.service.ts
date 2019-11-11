import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService) { }

  canActivate(): boolean | Observable<boolean> | Promise<boolean>{
    const bVal = this.loginService.isLoggedIn();
    console.log('canActivate', bVal);
    return bVal;
  }
}
