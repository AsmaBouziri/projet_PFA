import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReglementService } from 'src/app/reglement.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Reglement } from 'src/app/reglement';

@Component({
  selector: 'app-listereglement',
  templateUrl: './listereglement.component.html',
  styleUrls: ['./listereglement.component.css']
})
export class ListereglementComponent implements OnInit {
 reglements :any;
  constructor( private ReglementService:ReglementService, private router: Router) { }

  ngOnInit(): void {
    this.reglements = this.ReglementService.getreglist();
  }

    
  refreshList() {
    this.ReglementService.getreglist().subscribe((res) => {
      this.ReglementService.reglements= res as Reglement[];
    });
  }

  

  delete (_id: string ){
    if (confirm('Etes-Vous sûr de supprimer ce reglement?') == true){
      console.log(_id);
      this.ReglementService.deletereglement(_id).subscribe((res) => {
        this.refreshList();
        window.location.reload();
      }); 
   }

  }


}
