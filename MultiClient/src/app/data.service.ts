import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Url = `https://3000-crimson-iguana-2z5m1rgf.ws-eu04.gitpod.io/`;
  constructor(private http: HttpClient) { }
  getInfluencer() {
      return this.http.get(this.Url + 'Influencer');
  }

  selectCategory(query: any) {
    return this.http.get(this.Url +`${query}`);
  }

  getInfbyID(query: any){
    return this.http.get(this.Url+'Influencer'+`${query}`);
  }

}
