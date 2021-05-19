import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Url = `https://3000-rose-wolf-s9gzg0ab.ws-eu04.gitpod.io/`;
  constructor(private http: HttpClient) { }
  getInfluencer() {
      return this.http.get(this.Url + 'Influencer');
  }

  selectCategory(query: string) {
    return this.http.get(this.Url +`${query}`);
  }

  getAzienda(){
    return this.http.get(this.Url+'Azienda');
  }

}
