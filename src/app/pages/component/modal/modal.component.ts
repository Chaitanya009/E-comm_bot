import { Component, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Http} from "@angular/http";

@Component({
	selector: 'ngbd-modal',
	templateUrl: './modal.component.html',
	encapsulation: ViewEncapsulation.None,
	styles: [`
    .dark-modal .modal-content {
      background-color: #009efb;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})

export class NgbdModalBasic implements AfterViewInit{
  closeResult: string;
	title:string;
  subtitle:string;

  ngAfterViewInit(){}

  public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

  constructor(private modalService: NgbModal, private modalService2: NgbModal, private http: Http) {
    this.title = "Coupon Overview";
  } 

  ngOnInit(): void {
      var testData = [
  {
    "number": "1",
    "code": "WNDW3L",
    "date": "2017-01-09"
  },
  {
    "number": "2",
    "code": "FREW3L",
    "date": "2017-01-23"
  },
  {
    "number": "3",
    "code": "HFE45S",
    "date": "2017-01-15"
  },
  {
    "number": "4",
    "code": "CD2G3L",
    "date": "2017-01-27"
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



