import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminempserviceService } from '../adminempservice.service';

@Component({
  selector: 'app-admind',
  templateUrl: './admind.component.html',
  styleUrls: ['./admind.component.css']
})
export class AdmindComponent {
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
    console.log(this.contractorForm)
    console.log(this.contactReq)
  }
  contactReq(contactReq: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(){
    this.contractorForm;
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
}


// if (this.contractorForm.valid) {
//   const formData = this.contractorForm.value;
//   const jsonData = JSON.stringify(formData, null, 2); 

  
//   console.log('Registration Data:', jsonData);

  
//   this.adminreg.registerContractor(formData)
//     .subscribe(response => {
//       console.log('Registration successful', response);
//       alert('Registration successful');
//       this.router.navigate(['/login']);
//     }, error => {
//       console.error('Error in registration', error);
//       alert('Error in registration');
//     });
