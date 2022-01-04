import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AccueilComponent } from './pages/accueil/accueil.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    SalariesComponent,
    AjoutsalComponent,
    PagesComponent,
    PretComponent,
    ListpretComponent,
    DetailpretComponent,
    AjoutpretComponent,
    ListereglementComponent,
    DetailsregComponent,
    ListesalComponent,
    ReglementsComponent,
    AjoutreglementComponent,
    EditsalComponent,
    AdminComponent,
    ListeutilisateurComponent,
    AjoututilisateurComponent,
    AccueilComponent,
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ,ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
