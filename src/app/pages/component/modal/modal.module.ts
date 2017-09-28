import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdModalBasic } from './modal.component';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from "angular2-datatable";

const routes: Routes = [{
	path: '',
	data: {
      title: 'Coupon'
     
    },
	component: NgbdModalBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      ReactiveFormsModule, 
      NgbModule.forRoot(),
    	RouterModule.forChild(routes),
      DataTableModule
    ],
	declarations: [NgbdModalBasic]
})
export class ModalModule { }
