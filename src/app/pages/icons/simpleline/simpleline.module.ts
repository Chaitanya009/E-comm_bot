import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SimplelineComponent } from './simpleline.component';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Brands',
      urls: [{title: 'Brands',url: '/'}]
    },
	component: SimplelineComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [SimplelineComponent]
})
export class SimplelineIconModule { }