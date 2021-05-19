import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  displayInf() {
    const url = `https://3000-gold-cricket-t2nt6t65.ws-eu04.gitpod.io/Influencer`;
    let obsdata = this.http.get(url);
    return obsdata;
  }

   selectCategorise(query: string) {
    const url = `https://3000-gold-cricket-t2nt6t65.ws-eu04.gitpod.io/${query}`;

    let obsdata = this.http.get(url);
    return obsdata;
  }
}
