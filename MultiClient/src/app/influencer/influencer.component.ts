import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.css']
})
export class InfluencerComponent {

  obsdata!: Observable<Object>;
  results: any;
  constructor(public dataservice: DataService) {}

  submit(): void {

    this.obsdata = this.dataservice.displayInf();
    this.obsdata.subscribe((data) => this.results = data);
  }

}
