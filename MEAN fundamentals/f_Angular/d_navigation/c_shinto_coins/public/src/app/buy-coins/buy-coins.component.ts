import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-buy-coins',
  templateUrl: './buy-coins.component.html',
  styleUrls: ['./buy-coins.component.css']
})
export class BuyCoinsComponent implements OnInit {
  _purchaseQuantity: number;
  constructor(
    private _coinService: CoinService
  ) { }

  ngOnInit() {
  }

  buyCoins() {
    console.log('buyCoins invoked');
    this._coinService.buyCoins(this._purchaseQuantity);
    this._purchaseQuantity = 0;
  }

}
