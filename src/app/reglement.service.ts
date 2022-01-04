import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import {Reglement} from './reglement';


@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  private reglement$ =new Subject <Reglement>();
  selectedreglement!: Reglement;
  private apiUrl ='/api/reglement/';
  readonly baseurl ='http://localhost:4050/api/reglement/get';
  reglements : any;
 


  constructor(private httpClient:HttpClient , private $http:HttpClient) { }
 
  get reglement(){
    return  this.reglement$.asObservable();
   }


  insert(reglement:any){
    return  this.httpClient.post<Reglement>(`${this.apiUrl}insert`,reglement)
    .pipe( switchMap(savedutilisateur=>{
          this.setreglement(savedutilisateur);
          console.log('reglement reg success ',savedutilisateur);
          return of (savedutilisateur);
    }),
    );
  
  }

  updatereg(id :any ,data :any): Observable<any>{
  
    return this.$http.put(`http://localhost:4050/api/reglement`+`/${id}`,data);
  }

  deleteemployee(id:String ){
    return this.$http.delete(`http://localhost:4050/api/reglement` +`/${id}`);
 
 }


  getreglist(){
    return this.$http.get(this.baseurl)
  }


  deletereglement(id:String  ){
    return this.$http.delete(`http://localhost:4050/api/reglement` +`/${id}`);
 
 }


  //get reglement by ID
  getreglement(id:any ){
    return this.$http.get(`http://localhost:4050/api/reglement/get`+`/${id}`)
  }
  
  
  private setreglement(Reglement : Reglement )
    {
      this.reglement$.next(Reglement);
    }
}
