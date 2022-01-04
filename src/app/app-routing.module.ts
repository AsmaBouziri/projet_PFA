import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SalariesComponent } from './pages/salaries/salaries.component';
import { AjoutsalComponent } from './pages/salaries/ajoutsal/ajoutsal.component';
import { PagesComponent } from './pages/pages.component';
import { PretComponent } from './pages/pret/pret.component';
import { ListpretComponent } from './pages/pret/listpret/listpret.component';
import { DetailpretComponent } from './pages/pret/detailpret/detailpret.component';
import { AjoutpretComponent } from './pages/pret/ajoutpret/ajoutpret.component';
import { ListereglementComponent } from './pages/reglements/listereglement/listereglement.component';
import { DetailsregComponent } from './pages/reglements/detailsreg/detailsreg.component';
import { ListesalComponent } from './pages/salaries/listesal/listesal.component';
import { ReglementsComponent } from './pages/reglements/reglements.component';
import { AjoutreglementComponent } from './pages/reglements/ajoutreglement/ajoutreglement.component';
import { EditsalComponent } from './pages/salaries/editsal/editsal.component';
import { AdminComponent } from './admin/admin.component';
import { ListeutilisateurComponent } from './admin/listeutilisateur/listeutilisateur.component';
import { AjoututilisateurComponent } from './admin/ajoututilisateur/ajoututilisateur.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
const routes: Routes = [
  { path:'', redirectTo:'connect', pathMatch:'full'},
  { path:'navbar', component:NavbarComponent},
  { path:'connect', component:ConnexionComponent},
  { path:'pages', component:PagesComponent, children:[
    { path:'accueil', component:AccueilComponent},
    {path:'pret',component:PretComponent, children:[
      {path:'', redirectTo:'listp', pathMatch:'full'},
      {path:'listp',component:ListpretComponent},
      {path :'detailp/:_id/:numpret', component:DetailpretComponent},
      { path:'ajoutpret' , component:AjoutpretComponent}
    ]},
    { path:'salaries', component:SalariesComponent, children:[
      {path:'', redirectTo:'listsal', pathMatch:'full'},
      {path:'listsal',component:ListesalComponent},
      { path:'ajoutsal', component:AjoutsalComponent},
      { path:'modifsal/:_id', component:EditsalComponent}
 
    ]},
    { path:'reg', component:ReglementsComponent, children:[
      {path:'', redirectTo:'listeregl', pathMatch:'full'},
      { path:'listeregl' , component:ListereglementComponent},
      { path:'detailsreg/:_id' , component:DetailsregComponent},
      { path:'ajoutreg' , component:AjoutreglementComponent},
    ]}

  ]},

  { path:'admin', component:AdminComponent, children:[
    {path:'', redirectTo:'listuser', pathMatch:'full'},
    {path:'listuser',component:ListeutilisateurComponent},
    { path:'ajoutuser', component:AjoututilisateurComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
