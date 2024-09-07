import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategroiesService {

  constructor(private _HttpClient: HttpClient) { }
  getAllCategories(): Observable<any> {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories",)
  }
  getspecificCategories(id: string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category=${id}`,)
  }
}
