import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


   @ViewChild('username') username:ElementRef
   @ViewChild('password') password:ElementRef
 
  authservice :AuthserviceService=inject(AuthserviceService)
    router:Router=inject(Router)
check: boolean=false;
msg: string='';

  OnLoginClicked(){
    const emailId1=this.username.nativeElement.value;
    const password=this.password.nativeElement.value;


    const employee = this.authservice.login(emailId1,password);
    employee.subscribe(data =>{
      console.log("Data : ",data);
      this.check=true;
      this.msg=data;
      this.router.navigate(['/home']);
    },
    err =>{
      console.log(err);
      alert('Invalid Username or Password');
    });
  }
}
