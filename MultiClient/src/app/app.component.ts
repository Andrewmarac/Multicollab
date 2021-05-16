import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultiClient';

  obsdata!: Observable<Object>;
  results: any;
  constructor(public dataservice: DataService) {}

  submit(): void {

    this.obsdata = this.dataservice.displayInf();
    this.obsdata.subscribe((data) => this.results = data);
  }

}
