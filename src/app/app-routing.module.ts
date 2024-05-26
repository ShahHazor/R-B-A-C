import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserNormalComponent } from './user-normal/user-normal.component';
import { AthenticationGuard } from './athentication.guard'
import { UserCaseComponent } from './user-case/user-case.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
  },
  {
    path:"admin",
    component:AdminComponent,
    canActivate: [AthenticationGuard], 
  },{
    path:"user-normal",
    component:UserNormalComponent,
  },
  {
    path:"user-cases",
    component:UserCaseComponent,
  },
  {
    path:"registered",
    component:RegistrationComponent,
  },
  {
    path:"**",
    component:NotFoundComponent,
  },
  // {
  //   path:"**",
  //   component:NotFoundComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
