import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdmindComponent } from './admind/admind.component';
import { AdminlogComponent } from './adminlog/adminlog.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'reg',component:AdminregistrationComponent},
{path:'admind',component:AdmindComponent},
{path:'login/adminlogin',component:AdminlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
