import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';
import { PretserviceService } from 'src/app/pretservice.service';
import { ReglementService } from 'src/app/reglement.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  testsal :any;
  nbrsal=0;

  testpret :any;
  nbrpret=0;

  
  testreg :any;
  nbrreg=0;

  
  constructor(private EmployeeService:EmployeeService,private PretserviceService:PretserviceService ,private router: Router , private ReglementService:ReglementService) { }

  ngOnInit(): void {
    //nombre salariées 
    this.EmployeeService.getemployeelist()
    .subscribe (data => {
      this.testsal =data
      console.log ("test",this.testsal)  ;

      const n = this.testsal.length
      for  (let i=0 ; i<n;i++) {
          this.nbrsal=this.nbrsal+1
          console.log("nbrrrr",this.nbrsal)
       }
       console.log("nbr",this.nbrsal)


})

    //nombre pret
    this.PretserviceService.getpretlist()
    .subscribe (data => {
      this.testpret =data
      console.log ("test",this.testpret)  ;

      const np = this.testpret.length
      for  (let i=0 ; i<np;i++) {
          this.nbrpret=this.nbrpret+1
          console.log("nbrrrr",this.nbrpret)
       }
       console.log("nbraa",this.nbrpret)

  })

  //nombre reglement
  this.ReglementService.getreglist()
  .subscribe (data => {
    this.testreg =data
    console.log ("test",this.testreg)  ;

    const nr = this.testreg.length
    for  (let i=0 ; i<nr;i++) {
        this.nbrreg=this.nbrreg+1
        console.log("bbbbb",this.nbrreg)
     }
     console.log("dddd",this.nbrreg)

})

}



}
