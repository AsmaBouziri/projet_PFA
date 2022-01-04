import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../../employee.service';


@Component({
  selector: 'app-ajoutsal',
  templateUrl: './ajoutsal.component.html',
  styleUrls: ['./ajoutsal.component.css']
})


export class AjoutsalComponent{
 userForm = new FormGroup({ 
    matsal: new FormControl('', [Validators.required]),
    intsal: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    ntelephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    Cin: new FormControl('', [Validators.required ,Validators.minLength(8)])
  });
  
  constructor( private router : Router,private EmployeeService:EmployeeService)
  {
    
    
  }
  
  insert()
  { const employee =this.userForm.getRawValue();
    console.log(employee);
    this.EmployeeService
      .insert(employee)
      .subscribe(s =>this.router.navigate(['/pages/salaries/listsal']))
     
  }
  

  get matsal (){
    return this.userForm.get('matsal');
  }

  get intsal(){
    return this.userForm.get('intsal');
  }

  get adresse(){
    return this.userForm.get('adresse');
  }

  get ntelephone(){
    return this.userForm.get('ntelephone');
  }

  get email(){
    return this.userForm.get('email');
  }

  get Cin(){
    return this.userForm.get('Cin');
  }

   ngOnInit(): void {
      
  }

}
