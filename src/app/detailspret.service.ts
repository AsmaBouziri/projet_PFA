import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { detailspret } from './detailspret';

@Injectable({
  providedIn: 'root'
})
export class DetailspretService {
  private datailspret$ =new Subject <detailspret>();
  selecteddatailspret!: detailspret;
  private apiUrl ='/api/deatilspret/';
  readonly baseurl ='http://localhost:4050/api/deatilspret/getdetails';
  datailsprets : any;

  constructor( private httpClient:HttpClient , private $http:HttpClient) { }

  get datailspret(){
    return  this.datailspret$.asObservable();
   }

  // ajouter pret
  insert(detailspret:any){
    return  this.httpClient.post<detailspret>(`${this.apiUrl}insert`,detailspret)
    .pipe( switchMap(savedpret=>{
          this.setdatailspret(savedpret);
          console.log('detailspret reg success ',savedpret);
          return of (savedpret);
    }),
  
    catchError(e=> {
      console.log('server error occured',e);
      return throwError('insert failed ');
     })
    );
  
  }

  
  //get liste pret
  getdetailspretlist(){
    return this.$http.get(this.baseurl)
  }

  //get details by id 
  getdetails(id:any ){
    return this.$http.get(`http://localhost:4050/api/deatilspret/getdet`+`/${id}`)
  }

  //get details by numpret
  getdetialspret(numpret:any ){
    console.log( "bbbb"+numpret)
    return this.$http.get(`http://localhost:4050/api/deatilspret/get`+`/${numpret}`)
  }


  getdetialspretpayer(numpret:any ){
    console.log( "ppppp"+numpret)
    return this.$http.get(`http://localhost:4050/api/deatilspret/getpayer`+`/${numpret}`)
  }

  //update 
  updatdetailspret(id :any ,data :any): Observable<any>{
  
    return this.$http.put(`http://localhost:4050/api/deatilspret`+`/${id}`,data);
  }
  
  

  private setdatailspret(datailspret : any )
  {
    this.datailspret$.next(datailspret);
  } 
  
}
