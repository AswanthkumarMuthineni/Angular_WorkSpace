import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminempserviceService {

  
  private apiUrl = 'http://localhost:8080/employee/register'; 
  private apiurl1='http://localhost:8080/contractor/AllEmployeeDetails'
  private apiurl2='http://localhost:8080/contractor/updateEmployeeDetails'

  constructor(private http: HttpClient) { }

  sendFormData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData,{responseType:'text'});
  }

  getAllEmployeeDetails(loginReq:any): Observable<any> {
    console.log(loginReq);
    return this.http.patch(this.apiurl1,loginReq);
  }

  updateEmployeeDetails(employeeCode): Observable<any> {
    
    return this.http.put(this.apiurl2,employeeCode,{responseType:'text'});
  }


}
