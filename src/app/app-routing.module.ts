import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewBusinessCardComponent } from './new-business-card/new-business-card.component';
import { AuthGuardService } from './guard/auth-guard.service';

const routes: Routes = [
   //{ path: '', pathMatch: 'full', redirectTo: 'login' },
   { path: 'login', component: LoginComponent },
   { path: 'nf', component: NotFoundComponent },
   { path: 'newCard', component: NewBusinessCardComponent, canActivate: [AuthGuardService] },
   { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
