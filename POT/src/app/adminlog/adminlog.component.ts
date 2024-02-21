import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent {
  
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
