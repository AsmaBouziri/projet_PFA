import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReglementService } from 'src/app/reglement.service';


@Component({
  selector: 'app-ajoutreglement',
  templateUrl: './ajoutreglement.component.html',
  styleUrls: ['./ajoutreglement.component.css']
})
export class AjoutreglementComponent implements OnInit {

  userForm = new FormGroup({ 
    numrecu: new FormControl('', [Validators.required]),
    numech : new FormControl('', [Validators.required]),
    numpret : new FormControl('', [Validators.required]),
    daterecu: new FormControl('', [Validators.required]),
    matsal: new FormControl('', [Validators.required]),
    intsal: new FormControl('', [Validators.required]),
    montant: new FormControl('', [Validators.required]),
    echeance: new FormControl('', [Validators.required]),
    modep: new FormControl('', [Validators.required]),
    typedep: new FormControl('', [Validators.required])
  });
  constructor(private router : Router,private ReglementService:ReglementService) { }

  insert()
  { const utilisateur =this.userForm.getRawValue();
    console.log(utilisateur);
    this.ReglementService
      .insert(utilisateur)
      .subscribe(s =>this.router.navigate(['/pages/reg']))
     
  }
  get numrecu (){
    return this.userForm.get('numrecu');
  }

  get daterecu(){
    return this.userForm.get('daterecu');
  }

  get matsal(){
    return this.userForm.get('matsal');
  }

  get intsal(){
    return this.userForm.get('intsal');
  }

  get montant(){
    return this.userForm.get('montant');
  }

  get echeance(){
    return this.userForm.get('echeance');
  }

  get modep(){
    return this.userForm.get('modep');
  }

  get typedep(){
    return this.userForm.get('typedep');
  }

  ngOnInit(): void {
  }

}
