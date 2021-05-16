import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  displayInf() {
    const url = `https://3000-ivory-deer-64vzeloi.ws-eu04.gitpod.io/Azienda`;
    let obsdata = this.http.get(url);
    return obsdata;
  }
}
