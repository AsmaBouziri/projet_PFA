import { Component, OnInit } from '@angular/core';
import { PretserviceService } from 'src/app/pretservice.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,Validators } from '@angular/forms';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReglementService } from 'src/app/reglement.service';


@Component({
  selector: 'app-detailsreg',
  templateUrl: './detailsreg.component.html',
  styleUrls: ['./detailsreg.component.css']
})
export class DetailsregComponent implements OnInit {
  regelement:any;
  constructor(private $http:HttpClient ,private router :Router ,private route:ActivatedRoute ,private ReglementService:ReglementService) { }

  ngOnInit(): void {
    console.log("id",this.route.snapshot.paramMap.get('_id'));
    const id= this.route.snapshot.paramMap.get('_id');
    this.getreglement(id);
  }


  getreglement(id :any){
    console.log("id:",id)
    this.ReglementService.getreglement(id)
    .subscribe ( data => {
      this.regelement =data
      console.log ("dataa",data)  ;
      console.log ("regelement",this.regelement)
    
      },
      error => {
        console.log("ereurrr",error);
      }
      )
      
  }

}
