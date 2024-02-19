

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminempserviceService } from '../adminempservice.service';


 @Component({   selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
 })
export class YourComponent implements OnInit {
  contractorForm;

  constructor(private fb: FormBuilder, private empservice:AdminempserviceService) {
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
  ngOnInit(){
    this.contractorForm;
  }

  onSubmit() {
    if (this.contractorForm.valid) {
      const formData = this.contractorForm.value;
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
}

