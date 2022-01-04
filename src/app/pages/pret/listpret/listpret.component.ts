import { Component, OnInit } from '@angular/core';
import { PretserviceService } from 'src/app/pretservice.service';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';


import{Pret} from '../../../pret';
import { ModalService } from 'src/app/_modal';

declare var M: any;


@Component({
  selector: 'app-listpret',
  templateUrl: './listpret.component.html',
  styleUrls: ['./listpret.component.css']
})
export class ListpretComponent implements OnInit {
prets:any;
  constructor(private pretService:PretserviceService, private router: Router,private modalService: ModalService) { }

  ngOnInit(): void {
    this.prets = this.pretService.getpretlist();
  }

  
  refreshpretList() {
    this.pretService.getpretlist().subscribe((res) => {
      this.pretService.prets= res as Pret[];
    });
  }

  
  delete (_id: string ){
    if (confirm('Etes-Vous sûr de supprimer ce pret ?') == true){
      console.log(_id);
      this.pretService.deletepret(_id).subscribe((res) => {
        this.refreshpretList();
        window.location.reload();
      }); 
   }
  }

 /* 
  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
*/

}
