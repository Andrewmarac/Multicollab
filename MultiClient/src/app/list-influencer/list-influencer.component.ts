import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-influencer',
  templateUrl: './list-influencer.component.html',
  styleUrls: ['./list-influencer.component.css']
})
export class ListInfluencerComponent  implements OnInit {
  results: any;

  constructor(public dataservice: DataService, private route: ActivatedRoute) { }
    ngOnInit(): void {
      this.route.paramMap.subscribe(this.getRouterParam);
  }

    getRouterParam = (params: ParamMap) =>
    {
      let cat = params.get('id');
      this.dataservice.selectCategory(cat).subscribe((data: any)=>{
      this.results = data;
      })
    }
}
