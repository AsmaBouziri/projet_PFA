import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-ajoututilisateur',
  templateUrl: './ajoututilisateur.component.html',
  styleUrls: ['./ajoututilisateur.component.css']
})
export class AjoututilisateurComponent implements OnInit {
  
  userForm = new FormGroup({ 
    utilisateur: new FormControl('', [Validators.required]),
    mdp: new FormControl('', [Validators.required])
  });

  constructor(private router : Router,private AuthService:AuthService) { }

  insert()
  { const utilisateur =this.userForm.getRawValue();
    console.log(utilisateur);
    this.AuthService
      .insert(utilisateur)
      .subscribe(s =>this.router.navigate(['/admin']))
     
  }

  get utilisateur (){
    return this.userForm.get('utilisateur');
  }

  get mdp (){
    return this.userForm.get('mdp');
  }

  ngOnInit(): void {
  }

}
