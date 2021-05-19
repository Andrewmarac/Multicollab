import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  results: any;
  constructor(public dataservice: DataService) {}


  displayInfluencer():void{
    this.dataservice.getInfluencer().subscribe((data)=>{
      this.results=data;
    })
  }

  getCategory(query:string){

    this.dataservice.selectCategory(query).subscribe((data)=>{
      this.results=data;
    })
  }
}
