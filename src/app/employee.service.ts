import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee$ =new Subject <Employee>();
   selectedEmployee:any;
  private apiUrl ='/api/auth/';
  readonly baseurl ='http://localhost:4050/api/auth/get';
  employees : any;

  constructor(private httpClient:HttpClient , private $http:HttpClient) { }


  get employee(){
    return  this.employee$.asObservable();
   }

  // ajout 
  insert(employee:any){
    return  this.httpClient.post<Employee>(`${this.apiUrl}insert`,employee)
    .pipe( switchMap(savedemployee=>{
          this.setemployee(savedemployee);
          console.log('employee reg success ',savedemployee);
          return of (savedemployee);
    }),
  
    catchError(e=> {
      console.log('server error occured',e);
      return throwError('insert failed ');
     })
    );
  
  }
// liste employee
  getemployeelist(){
    return this.$http.get(this.baseurl)
  }
  
//getters
  getemployee(id:any ){
    return this.$http.get(`http://localhost:4050/api/auth/get`+`/${id}`)
  }
  

  updateemployee(id :any ,data :any): Observable<any>{
  
    return this.$http.put(`http://localhost:4050/api/auth`+`/${id}`,data);
  }
  
  
  deleteemployee(id:String  ){
     return this.$http.delete(`http://localhost:4050/api/auth` +`/${id}`);
  
  }

  private setemployee(employee : Employee )
{
  this.employee$.next(employee);
}

public setselectedemp(emp:Employee){
  this.selectedEmployee=emp;
  console.log("selected",this.selectedEmployee)
}

public getselectedemp(){
  console.log("gett",this.selectedEmployee);
  return this.selectedEmployee;
}




}

