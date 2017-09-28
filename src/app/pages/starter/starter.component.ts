import { Component, AfterViewInit } from '@angular/core';
import {Http} from "@angular/http";
@Component({
	selector: 'ea-starter',
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
	title:string;
	subtitle:string;	
	

	ngAfterViewInit(){}

	 public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(private http: Http) {
    	this.title = "Json Data";
		this.subtitle = "This is some text within a card block."
    }

    ngOnInit(): void {
    	var testData = [
  {
    "name": "Wing",
    "email": "tellus.eu.augue@arcu.com",
    "regDate": "2016-01-09T14:48:34-08:00",
    "city": "Paglieta",
    "age": 25
  },
  {
    "name": "Whitney",
    "email": "sed.dictum@Donec.org",
    "regDate": "2017-01-23T20:09:52-08:00",
    "city": "Bear",
    "age": 32
  },
  {
    "name": "Oliver",
    "email": "mauris@Craslorem.ca",
    "regDate": "2015-11-19T19:11:33-08:00",
    "city": "Bruderheim",
    "age": 31
  }];

        // this.http.get("app/pages/data.json")
        //     .subscribe((data)=> {
        //         setTimeout(()=> {
        //             //this.data = data.json();
        //             this.data = testData;

        //         }, 1000);
        //     });

        this.data = testData;
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
}