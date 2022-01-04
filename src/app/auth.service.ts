import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { utilisateur } from './utilisateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private utilisateur$ =new Subject <utilisateur>();
  selectedutilisateur!: utilisateur;
  private apiUrl ='/api/admin/';
  readonly baseurl ='http://localhost:4050/api/admin/get';
  utilisateurs : any;
 


  constructor(private httpClient:HttpClient , private $http:HttpClient) { }
 
  get utilisateur(){
    return  this.utilisateur$.asObservable();
   }


  insert(utilisateur:any){
    return  this.httpClient.post<utilisateur>(`${this.apiUrl}insert`,utilisateur)
    .pipe( switchMap(savedutilisateur=>{
          this.setutilisateur(savedutilisateur);
          console.log('utilisateur reg success ',savedutilisateur);
          return of (savedutilisateur);
    }),
    );
  
  }
 
  getutilisateurlist(){
    return this.$http.get(this.baseurl)
  }

  
 //login 

 login(utilisateur:string,mdp:string){
    const logincred ={utilisateur,mdp};
    console.log('login credentials ',   logincred  )
    return of (logincred);
}

  getutilisateur(utilisateur:any ){
    return this.$http.get(`http://localhost:4050/api/admin/get`+`/${utilisateur}`)
  }


//delete
  deletereglement(id:String  ){
    return this.$http.delete(`http://localhost:4050/api/admin` +`/${id}`);
 
 }

 
  private setutilisateur(utilisateur : utilisateur )
  {
    this.utilisateur$.next(utilisateur);
  }

}
