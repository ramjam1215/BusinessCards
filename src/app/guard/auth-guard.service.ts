import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): boolean | Observable<boolean> | Promise<boolean>{
    //const bVal = this.loginService.state > 0;
    const bVal = this.loginService.isLoggedIn;
    console.log('canActivate', bVal);
    if(bVal){
      return bVal;
    }

    else{
      this.router.navigate(['/nf']);
      return bVal;
    }
    
  }
}
