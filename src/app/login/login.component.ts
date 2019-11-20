import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  
  getFormControls(){return this.loginForm.controls;}


  login() { 
    console.log(this.loginForm.value);
    
    if(this.loginForm.invalid){
      return;
    }
    
    this.loginService.login(this.loginForm.value);
  }

  getMsg(): boolean {
    if(this.loginService.state >= 1){
      return true;
    }

    return false;
  }
  

}
