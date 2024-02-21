import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminempserviceService {

  
  private apiUrl = 'http://localhost:8080/employee/register'; 
  private apiurl1='http://localhost:8080/contractor/AllEmployeeDetails'
  private apiurl2='http://localhost:8080/contractor/updateEmployeeDetails';
  private apiurl3='http://localhost:8080/contractor/deleteEmployeeRecord';

  constructor(private http: HttpClient) { }

  sendFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData,{responseType:'text'});
  }

  getAllEmployeeDetails(loginReq:any): Observable<any> {
    console.log(loginReq);
    return this.http.patch(this.apiurl1,loginReq);
  }

  updateEmployeeDetails(employee): Observable<any> {
    console.log( "update"+employee);
    return this.http.put(this.apiurl2,employee,{responseType:'text'});
  }
   deleteEmployeeDetails(deleteObject:any): Observable<any> {
    console.log(deleteObject)
    return this.http.post(this.apiurl3,deleteObject,{responseType:'text'});
  }


}
