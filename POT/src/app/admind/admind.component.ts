
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminempserviceService } from '../adminempservice.service';

@Component({
  selector: 'app-admind',
  templateUrl: './admind.component.html',
  styleUrls: ['./admind.component.css']
})
export class AdmindComponent {
  
  contractorForm: FormGroup;
  
  showForm;
  loginReq: any = { emailId: 'aswanth@gmail.com', password: 'Aswanth@5' };
  addemp: any[] = [];

  constructor(private fb: FormBuilder, private empservice: AdminempserviceService) {
    this.contractorForm = this.fb.group({
      employeeName: ['', Validators.required],
      contactReq: this.fb.group({
        emailId: new FormControl('', [Validators.required, Validators.email]),
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

  // editEmployee(data =! null) {
  //   this.showForm = false;
  //  if(data) {
  //   this.contractorForm.patchValue({
  //     employeeName: "",
  //     contactReq: {
  //       emailId: "",
  //       mobileNumber: "",
  //     },
  //     addressReq: {
  //       street: "",
  //       city: "",
  //       state: "",
  //       zipcode: "",
  //     },
  //     password: "",
  //     loginReq: {
  //       emailId: "",
  //       password: "",
  //     },
  //   });
  //  }
  // }

  editEmployee(id){
    this.empservice.updateEmployeeDetails(id).subscribe(data=>{
      console.log("update"+data);
      this.addemp = data;
    })
  }

  deleteEmployee() { }

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

