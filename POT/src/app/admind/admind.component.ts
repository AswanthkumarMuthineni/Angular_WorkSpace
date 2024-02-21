
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminempserviceService } from '../adminempservice.service';

@Component({
  selector: 'app-admind',
  templateUrl: './admind.component.html',
  styleUrls: ['./admind.component.css']
})
export class AdmindComponent {
open: boolean = false;

  
  contractorForm: FormGroup;
  
  showForm;
  loginReq: any = { emailId: 'aswanth@gmail.com', password: 'Aswanth@5' };
  addemp: any[] = [];
  deleteObject: any;
  updateobj:any


  
  
  constructor(private fb: FormBuilder, private empservice: AdminempserviceService) {
    this.contractorForm = this.fb.group({
      employeeName: ['', Validators.required],
      contactReq: this.fb.group({
        emailId: ['',[Validators.required,Validators.email]],
        mobileNumber: [null, Validators.required],
      }),
      addressReq: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: [null, Validators.required],
      }),
      password: ['', Validators.required],
      loginReq: this.fb.group({
        emailId: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }),
    });
  }

  ngOnInit() {
    this.loadallEmployees();
    console.log(this.loginReq);
  }

  onSubmit() {
    if (this.contractorForm.valid) {
      const formData = this.contractorForm.value;
      const jsonData = JSON.stringify(formData, null, 2);
      console.log('Emp Data:', jsonData);
      this.empservice.sendFormData(formData).subscribe(
        response => {
          console.log('Data sent successfully:', response);
        },
        error => {
          console.error('Error sending data:', error);
        }
      );
    }
  }

  addEmployeeForm(data=null) {
     this.showForm = true;
  
    if (data) {
    this.contractorForm.patchValue({
      employeeName: "",
      contactReq: {
        emailId: "",
        mobileNumber: "",
      },
      addressReq: {
        street: "",
        city: "",
        state: "",
        zipcode: "",
      },
      password: "",
      loginReq: {
        emailId: "",
        password: "",
      },
    });
    
  }
  

}
 updateForm:any;


previousDetails:any;

 //update employee
  editEmployee(emp){
    console.log(emp)
    this.previousDetails=emp;
    console.log(this.previousDetails)
this.open=true;
 
  }
  sendUpdatedDate() {
    this.empservice.updateEmployeeDetails(this.previousDetails).subscribe((data)=>{
   console.log(data);
    });
  }





  update(emp){
    this.EditFormData(emp)
    this.empservice.updateEmployeeDetails(this.updateobj).subscribe((data)=>{
      console.log("update"+data);
      this.loadallEmployees();
    })
  }

  EditFormData(emp) {
    this.updateForm = true;
    this.contractorForm.patchValue({
      employeeName: emp.employeeName,
      contactReq: {
        emailId: emp.contact.emailId,
        mobileNumber: emp.contact.mobileNumber,
      },
      addressReq: {
        street: emp.addressResponse.street,
        city: emp.addressResponse.city,
        state: emp.addressResponse.state,
        zipcode: emp.addressResponse.zipcode,
      }
   
    });
    
   
  }
  


  //deleteEmployee
deleteMsg:string="";
isDeleted:boolean = false;
  deleteEmployee(emp:any) { 
     this.empservice.deleteEmployeeDetails(emp).subscribe(
       (data) => {
          this.isDeleted = true;
          this.deleteMsg = data;
          setTimeout(() => {
            this.isDeleted = false;
            
          }, 5000);
       console.log('Employee deleted successfully:', data);
        this.loadallEmployees();
       },
      (error) => {
        console.error('Error deleting employee:', error);
      }
      );
    }


    //load all employees
      loadallEmployees() {
        this.empservice.getAllEmployeeDetails(this.loginReq).subscribe(
          response => {
            console.log('Data sent successfully:', response);
            this.addemp = response;
            console.log(this.addemp);
          },
          error => {
            console.error('Error sending data:', error);
          }
        );
      }
}







