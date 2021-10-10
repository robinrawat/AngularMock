import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Mockups, results } from '../models/mockup';

@Injectable({
  providedIn: 'root'
})
export class MockupsService {

  private count = new Subject<number>();

  private URL: string = "http://api.products.luezoid.com/products?page=1";

  private URL1: string = "http://api.products.luezoid.com/products?page=2";
  
  private token: string = "ULxG9gG98KDGPql/BFI/woCN9T8=";

  constructor(private http: HttpClient ) { }

  getData(): Observable<Mockups>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${this.token}`
      })
    };
    return this.http.get<Mockups>(`${this.URL}` , httpOptions);
  }

  getData1(): Observable<Mockups>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${this.token}`
      })
    };
    return this.http.get<Mockups>(`${this.URL1}` , httpOptions);
  }

  public shareData(c: number){
    this.count.next(c);
    
  }

  public getCount(): Observable<number> {
    return this.count.asObservable();
  }
}
