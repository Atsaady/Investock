import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getAllStocks(): Observable<any>{
    return this.http.get('http://localhost:5000/stocks');
  }

  createStock(): Observable<any>{
    return this.http.post('', {});
  }

  deleteStock(stock): Observable<any>{
    return this.http.get('http://localhost:5000/stocks');
  }

  getStockComments(stock): Observable<any>{
    return this.http.get(`http://localhost:5000/stocks/${stock}/comments`);
  }

  getRank(id): Observable<any>{
    return this.http.get(`http://localhost:5000/stockrank/${id}`);
  }
}
