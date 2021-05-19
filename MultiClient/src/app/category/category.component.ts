import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  obsdata!: Observable<Object>;
  results: any;
  constructor(public dataservice: DataService) {}

  submit(): void {

    this.obsdata = this.dataservice.displayInf();
    this.obsdata.subscribe((data) => this.results = data);
  }

  selcateg(query:string):void{
    this.obsdata = this.dataservice.selectCategorise(query);
    this.obsdata.subscribe((data) => this.results = data);
  }

}
