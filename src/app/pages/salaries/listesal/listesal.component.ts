import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import{Employee} from '../../../employee';

import { ModalService } from 'src/app/_modal';

//declare var M: any;

@Component({
  selector: 'app-listesal',
  templateUrl: './listesal.component.html',
  styleUrls: ['./listesal.component.css']
})
export class ListesalComponent implements OnInit {
employees:any;
  constructor( private EmployeeService:EmployeeService, private router: Router,private modalService: ModalService) { }

  ngOnInit(): void {
    this.employees = this.EmployeeService.getemployeelist();
  }

   onEdit(emp: Employee) {
     console.log(emp);
    this.EmployeeService.setselectedemp(emp) ;
}

  refreshEmployeeList() {
    this.EmployeeService.getemployeelist().subscribe((res) => {
      this.EmployeeService.employees= res as Employee[];
    });
  }

  delete (_id: string  ){
    if (confirm('Etes-Vous sûr de supprimer le salarie') == true){
      this.EmployeeService.deleteemployee(_id).subscribe((res) => {
      this.refreshEmployeeList();
       window.location.reload();
      

      }); 
   }
  }
 
}
