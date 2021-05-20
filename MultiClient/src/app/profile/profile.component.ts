import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profilo: any;

  constructor(public dataservice: DataService, private route: ActivatedRoute) { }
    ngOnInit(): void {
      this.route.paramMap.subscribe(this.getRouterParam);
    }

    getRouterParam = (params: ParamMap) =>
    {
      let p = params.get('id');
      this.dataservice.getInfbyID(p).subscribe((data: any)=>{
      this.profilo = data;
      })
    }
}
