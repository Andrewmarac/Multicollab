import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  displayInf() {
    const url = `https://3000-tan-rook-rswq8hwx.ws-eu04.gitpod.io/Influencer`;
    let obsdata = this.http.get(url);
    return obsdata;
  }
}
