import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-sell-coins',
  templateUrl: './sell-coins.component.html',
  styleUrls: ['./sell-coins.component.css']
})
export class SellCoinsComponent implements OnInit {
  _sellQuantity: 0;

  constructor(
    private _coinService: CoinService
  ) { }

  ngOnInit() {
  }

  sellCoins() {
    console.log('sellCoins invoked');
    this._coinService.sellCoins(this._sellQuantity);
    this._sellQuantity = 0;
  }

}
