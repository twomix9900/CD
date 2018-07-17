import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  _product: Object;
  _errors: any [] = [];
  tempErrors: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._product = { title: "", image: "", price: "" };
  }

  addProduct() {
    let productObs = this._httpService.addProduct(this._product);
    productObs.subscribe((data) => {
      this._errors = [];
      console.log("Got data back from DB for addProduct", data);
      if (data['error']) {
        for (let error of Object.keys(data['error']['errors'])) {
          data['error']['errors'][error] ? this._errors.push(data['error']['errors'][error]) : null;
        }
      } else {
        this._router.navigateByUrl('/all-products');
        this._errors = [];
      }
    });
  }

}
