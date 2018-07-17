import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  _products: Object[];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let productsObs = this._httpService.getProducts();
    productsObs.subscribe((data) => {
      console.log('Got data back from DB', data);
      this._products = data['products'];
    });
  }

  deleteProduct(id: string) {
    let productObs = this._httpService.deleteProduct(id);
    productObs.subscribe((data) => {
      console.log("Got data back from DB for delete product", data);
      this.getProducts();
    });
  }

}
