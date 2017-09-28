import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';
import {DataTableModule} from "angular2-datatable";

const routes: Routes = [{
	path: '',
	data: {
      title: 'Starter page',
      urls: [{title: 'Dashboard',url: '/'},{title: 'Starter page'}]
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes),
      DataTableModule
    ],
	declarations: [StarterComponent]
})
export class StarterModule { }