import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { utilisateur } from 'src/app/utilisateur';

@Component({
  selector: 'app-listeutilisateur',
  templateUrl: './listeutilisateur.component.html',
  styleUrls: ['./listeutilisateur.component.css']
})
export class ListeutilisateurComponent implements OnInit {
  utilisateurs:any;
  constructor(private AuthService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateurs = this.AuthService.getutilisateurlist();
  }

/*
  onEdit(utilisateur: utilisateur) {
    console.log(utilisateur);
   this.AuthService.(utilisateur) ;
}*/

refreshregList() {
  this.AuthService.getutilisateurlist().subscribe((res) => {
    this.AuthService.utilisateurs= res as utilisateur[];
  });
}

delete (_id: string  ){
  if (confirm('Etes-Vous sûr de supprimer ce utilisateur?') == true){
    this.AuthService.deletereglement(_id).subscribe((res) => {
    this.refreshregList();
     window.location.reload();
    }); 
 }
}
}
