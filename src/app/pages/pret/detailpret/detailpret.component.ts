import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { PretserviceService } from 'src/app/pretservice.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,Validators } from '@angular/forms';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailspretService } from 'src/app/detailspret.service';
import { first } from 'rxjs/operators';
/*
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
*/


@Component({
  selector: 'app-detailpret',
  templateUrl: './detailpret.component.html',
  styleUrls: ['./detailpret.component.css']
})
export class DetailpretComponent implements OnInit {
pret :any;
//btn :any;
nbr=0;
detailsprets:any;
detailspretspayer:any;
detail:any;
test : any;
test1 :any ;
nbr1=0;
montantr :any;
mont :any ;

userForm = new FormGroup({ 
  idpret: new FormControl('', [Validators.required]),
  numrecu: new FormControl('', [Validators.required]),
  dateech: new FormControl('', [Validators.required]),
  montant: new FormControl('', [Validators.required]),
  modepay: new FormControl('', [Validators.required]),
  etat: new FormControl(''),
});
 

  constructor( private DetailspretService:DetailspretService , private Pretservice:PretserviceService ,
     private $http:HttpClient ,private router :Router ,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    
    console.log("id",this.route.snapshot.paramMap.get('_id'));
    const id= this.route.snapshot.paramMap.get('_id')
    this.getpret(id)


    console.log("numpret",this.route.snapshot.paramMap.get('numpret'));
    const det= this.route.snapshot.paramMap.get('numpret')
    this.getdetailspret(det)
    this.getdetailspretpayer(det)
  
   
  }

  
  //get pret
   getpret(id :any){
    this.Pretservice.getpret(id)
    .subscribe ( data => {
      this.pret =data
     // console.log ("dataa",data)  ;
        },
      error => {
        console.log("ereurrr",error);
      }
      )
      
  }
  

  //get details totale by numpret
  getdetailspret(numpret :any){
  this.detailsprets= this.DetailspretService.getdetialspret(numpret)
  console.log("dddd",this.detailsprets)

 
  }



  //get details payer by numpret
  getdetailspretpayer(numpret :any){
    this.detailspretspayer= this.DetailspretService.getdetialspretpayer(numpret)
    console.log("ccccc",this.detailspretspayer)

    this.DetailspretService.getdetialspretpayer(numpret)
    .subscribe ( data => {
      this.test =data

      // nbr de recus payer
      const n = this.test.length
      for  (let i=0 ; i<n;i++) {
          this.nbr=this.nbr+1
       }
       console.log("nbr",this.nbr)

      //calcule montant restant
       console.log("mnt pret",this.pret.montantp)
       this.montantr =  Number(this.pret.montantp) - Number(this.pret.montantp) /  Number(this.pret.nbrech) * Number(this.nbr) 
       console.log("mnt restant",this.montantr)


       this.mont =Number(this.pret.montantp) /  Number(this.pret.nbrech) *  Number(this.nbr)
       console.log("mnt1 ",this.mont)
      
      },
      error => {
        console.log("ereurrr",error);
      }
      )
    

    }
  

  //update etat 
  updatedetailspret(id:any)  {
    this.DetailspretService.getdetails(id)    
    .subscribe ( data => {
      this.detail =data
      console.log ("dataa",data)  ;
      
        },
      error => {
        console.log("ereurrr",error);
      }
      )

    this.detail.etat=1 
    console.log ("detail",this.detail) 

    this.DetailspretService.updatdetailspret(id,this.detail)
    .pipe(first())
    .subscribe({
        next: () => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: error => {
          
        }
    });
    window.location.reload();
  }

/*
  //imprimer
  @ViewChild('pdfTable') pdfTable: ElementRef;
  public downloadAsPDF() {
    const doc = new jsPDF();
    //get table html
    const pdfTable = this.pdfTable.nativeElement;
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
   
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
    
  
  }

*/


}
