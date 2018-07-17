import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getProducts() {
    return this._http.get('/products');
  }

  getProduct(id:string) {
    return this._http.get(`/product/${id}`);
  }

  editProduct(product: Object) {
    return this._http.put(`/product/${product['_id']}`, product);
  }

  addProduct(product: Object) {
    return this._http.post('/product', product);
  }

  deleteProduct(id: string) {
    return this._http.delete(`/product/${id}`);
  }
}
