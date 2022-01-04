import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../../../employee';
import { NgForm } from '@angular/forms';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
declare var M: any;

@Component({
  selector: 'app-editsal',
  templateUrl: './editsal.component.html',
  styleUrls: ['./editsal.component.css'],
  providers: [EmployeeService]
})
export class EditsalComponent implements OnInit {
  employees:any;
  employee: any;

  userForm = new FormGroup({ 
    _id:new FormControl('', [Validators.required]),
    matsal: new FormControl('', [Validators.required]),
    intsal: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    ntelephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    Cin: new FormControl('', [Validators.required])
  });
 
  constructor( public EmployeeService:EmployeeService , private $http:HttpClient ,private router :Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    /*
    this.employee=this.EmployeeService.getselectedemp();
    console.log("employ",this.employee);
    this.userForm.setValue(this.employee);
    console.log("formm",this.userForm);

*/

    console.log("id",this.route.snapshot.paramMap.get('_id'));

    const id= this.route.snapshot.paramMap.get('_id')


    console.log("iddd",id);
    this.getemployee(id);
  }

  
  /*
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.Authservice.selectedemployee = {
      _id :"",
      matsal: "" ,
      intsal : "" ,
      adresse : "" ,
      ntelephone : "" ,
      email  : "" ,
      Cin  : "" 
    }
  }
  */

  refreshEmployeeList() {
    this.EmployeeService.getemployeelist().subscribe((res) => {
      this.EmployeeService.employees = res as Employee[];
    });
  }

  getemployee(id :any){
    console.log("id:",id)
    this.EmployeeService.getemployee(id)
    .subscribe ( data => {
      this.employee =data
      console.log ("dataa",data)  ;
      console.log ("employeeeee",this.employee)
      },
      error => {
        console.log("ereurrr",error);
      }
      )
  }
/*
  updatesal(){
    this.EmployeeService.updateemployee(this.employee.id ,this.employee)
    .subscribe(
      Response => {
      console.log(Response);
      },
      error => {
        console.log(error);
      });
  }
*/
updatesal()  {
  this.EmployeeService.updateemployee(this.employee._id, this.employee)
  .pipe(first())
  .subscribe({
      next: () => {
         
          this.router.navigate(['../../'], { relativeTo: this.route });
      },
      error: error => {
        
      }
  });

}
  /*
  onSubmit(form: NgForm) {
      this.Authservice.putemployee(form.value).subscribe((res) => {
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
  */

}


