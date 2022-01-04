import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
 
})
export class ConnexionComponent implements OnInit {
  utilisateurr:any;
  userForm = new FormGroup({ 
    utilisateur: new FormControl('', [Validators.required]),
    mdp: new FormControl('', [Validators.required])

  });
  
  constructor( private router:Router,private authService : AuthService ) { }


  ngOnInit(): void {}
  
  login(userForm :any  ){
    //console.log(userForm);
    //console.log(this.authService.login(userForm.value.utilisateur,userForm.value.mdp))
    this.authService
      .login(userForm.value.utilisateur,userForm.value.mdp)
    this.verif(userForm);
   }


   verif (userForm :any){
     this.authService.getutilisateur(userForm.value.utilisateur)
        .subscribe(data => {
          this.utilisateurr=data;
          console.log('user :',this.utilisateurr);
          console.log(this.utilisateurr.mdp);
           
          if (userForm.value.mdp == this.utilisateurr.mdp )
          { console.log("ok");
          this.router.navigate(['/pages/accueil']);
          }
          else {
            console.log("nonn")
            if (confirm('veillez vérifier vos données !') == true){
                  window.location.reload();
                }
          }
        } );
  
   }

   






}
