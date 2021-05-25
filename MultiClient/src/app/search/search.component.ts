import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  results:any
  constructor(public dataservice:DataService) { }
  findinf(query: HTMLInputElement):void{
            if (!query.value) {
              return console.log("dsdsdsd");
            }
            this.dataservice.getInfbyID(query.value).subscribe((data: any)=>{
                  this.results = data;
      })
  }
}
