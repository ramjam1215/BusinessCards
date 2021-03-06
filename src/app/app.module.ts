import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthGuardService } from './guard/auth-guard.service';
import { NewBusinessCardComponent } from './new-business-card/new-business-card.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { WebcamModule } from 'ngx-webcam';
import {WebCamComponent } from './web-cam/web-cam.component';
import { HttpClientModule } from '@angular/common/http';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    NewBusinessCardComponent,
    BusinessCardsComponent,
    BusinessCardComponent,
    WebCamComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
