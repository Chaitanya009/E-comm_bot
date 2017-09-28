import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'simpleline',
	templateUrl: './simpleline.component.html'
})
export class SimplelineComponent {

	constructor(private router:Router) {

  }

	public brandList = [
		{
			'brandName': 'brand1',
			'brandId': '1234'
		},
		{
			'brandName': 'brand2',
			'brandId': '5678'
		}
	];


}
