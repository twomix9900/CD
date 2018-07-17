import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  _productId: string;
  _product: Object;
  _errors: any [] = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._productId = params['id'];
    });
    this._product = { };
    this.getProduct();
  }

  getProduct() {
    let productObs = this._httpService.getProduct(this._productId);
    productObs.subscribe((data) => {
      console.log("Got data back from DB", data);
      this._product = data['product'][0];
    });
  }

  editProduct() {
    let productObs = this._httpService.editProduct(this._product);
    productObs.subscribe((data) => {
      this._errors = [];
      console.log('got data back from DB', data);
      if (data['error']) {
        for (let error of Object.keys(data['error']['errors'])) {
          data['error']['errors'][error] ? this._errors.push(data['error']['errors'][error]) : null;
        }
      } else {
        this._errors = [];
        this._router.navigateByUrl('/all-products');
      }
    });
  }


}
