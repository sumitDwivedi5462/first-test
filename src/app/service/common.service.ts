import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(this.baseURL + url);
  }

  post(url: string, id: any){
    return this.http.post(`${this.baseURL+url}/${id}`, {});
  }
}
