import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PretserviceService } from 'src/app/pretservice.service';
import { DetailspretService } from 'src/app/detailspret.service';


@Component({
  selector: 'app-ajoutpret',
  templateUrl: './ajoutpret.component.html',
  styleUrls: ['./ajoutpret.component.css']
})


export class AjoutpretComponent implements OnInit {
  etat=0;
  
  userForm = new FormGroup({ 
    numrecu : new FormControl('', [Validators.required]),
    numpret: new FormControl('', [Validators.required]),
    typepret: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    matsal: new FormControl('', [Validators.required]),
    montantp: new FormControl('', [Validators.required]),
    nbrech: new FormControl('', [Validators.required]),
    dated: new FormControl('', [Validators.required]),
    modepay :new FormControl('', [Validators.required]),
  });

  constructor(private router : Router, private pretservice:PretserviceService, private DetailspretService:DetailspretService ) { }


  insertdetails(userForm :any){
    const detailspret =userForm.getRawValue();
    //div montant 
    const montant= Number(detailspret.montantp) / Number(detailspret.nbrech)
    detailspret.montantp =montant
    detailspret.etat=0
    
    for(let i=0 ; i<detailspret.nbrech;i++){
        // incrimentation numrecu
        detailspret.numrecu = i+1
        console.log("num",detailspret.numrecu)
        // incrimentation date
        const date = new Date(detailspret.date)
        date.setMonth(date.getMonth() + 1);
        detailspret.date =  date
        console.log("dateee",date)
        console.log (detailspret.date);
        console.log("det" ,detailspret)
 
          this.DetailspretService
          .insert(detailspret)
          .subscribe(s =>this.router.navigate([]))

    }
  }

  insert()
  { const pret =this.userForm.getRawValue();
    
    this.pretservice
      .insert(pret)
      .subscribe(s =>this.router.navigate(['/pages/pret/listp']))
      this.insertdetails(this.userForm)
     
  }




  get numpret (){
    return this.userForm.get('matsal');
  }

  get typepret(){
    return this.userForm.get('typepret');
  }

  get date(){
    return this.userForm.get('date');
  }

  get matsal(){
    return this.userForm.get('matsal');
  }

  get montantp(){
    return this.userForm.get('montantp');
  }

  get montantr(){
    return this.userForm.get('montantr');
  }

  get montantrs(){
    return this.userForm.get('montantrs');
  }

  ngOnInit(): void {

  }

}
