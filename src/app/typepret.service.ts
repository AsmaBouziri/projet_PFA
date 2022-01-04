import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { typepret } from './typepret' ; 

@Injectable({
  providedIn: 'root'
})
export class TypepretService {
  private typepret$ =new Subject <typepret>();
  selectedEmployee:any;
  private apiUrl ='/api/typepret/';
  readonly baseurl ='http://localhost:4050/api/typepret/get';
  employees : any;


  constructor(private httpClient:HttpClient , private $http:HttpClient) { }

  insert(employee:any){
    return  this.httpClient.post<typepret>(`${this.apiUrl}insert`,employee)
    .pipe( switchMap(savedemployee=>{
          this.settypepret(savedemployee);
          console.log('employee reg success ',savedemployee);
          return of (savedemployee);
    }),
    )
}


private settypepret(typepret : typepret )
{
  this.typepret$.next(typepret);
}

}
