import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import {Pret} from './pret';


@Injectable({
  providedIn: 'root'
})
export class PretserviceService {
  private pret$ =new Subject <Pret>();
  selectedpret!: Pret;
  private apiUrl ='/api/pret/';
  readonly baseurl ='http://localhost:4050/api/pret/getprets';
  prets : any;

  constructor(private httpClient:HttpClient , private $http:HttpClient) { }
// ajouter pret
  insert(pret:any){
    return  this.httpClient.post<Pret>(`${this.apiUrl}insert`,pret)
    .pipe( switchMap(savedpret=>{
          this.setpret(savedpret);
          console.log('pret reg success ',savedpret);
          return of (savedpret);
    }),
  
    catchError(e=> {
      console.log('server error occured',e);
      return throwError('insert failed ');
     })
    );
  
  }
  private setpret(pret : Pret )
  {
    this.pret$.next(pret);
  } 
  
  get pret(){
    return  this.pret$.asObservable();
   }

//get pret  by ID
   getpret(id:any ){
    return this.$http.get(`http://localhost:4050/api/pret/get`+`/${id}`)
  }
  
//get liste pret
  getpretlist(){
    return this.$http.get(this.baseurl)
  }
  
//supprimer pret
  deletepret(_id:String  ){
    return this.$http.delete(`http://localhost:4050/api/pret/` +`${_id}`);
 
 }

// get datils pret by numpret 
getdetailsp(_id:any ){
  return this.$http.get(`http://localhost:4050/api/admin/get`+`/${_id}`)
}



}
