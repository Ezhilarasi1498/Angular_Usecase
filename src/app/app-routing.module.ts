import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { UserComponent } from './user/user.component';
import { AuthGuard } from "./shared/auth.guard";
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home', component:HomeComponent},
  {path:'login', component: UserComponent},
  {path:'register',component:RegisterComponent},
  {path:'userPage', component:UserpageComponent,canActivate: [AuthGuard]},
  {path:'userAccount', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
