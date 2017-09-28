import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdAccordionBasic } from './accordion.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';


const routes: Routes = [{
	path: '',
	data: {
      title: 'Dashboard',
      urls: [{title: 'Dashboard'}]
    },
	component: NgbdAccordionBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
      NgbModule.forRoot(),
    	RouterModule.forChild(routes),
      ChartsModule
    ],
	declarations: [NgbdAccordionBasic]
})
export class AccordionModule { }
