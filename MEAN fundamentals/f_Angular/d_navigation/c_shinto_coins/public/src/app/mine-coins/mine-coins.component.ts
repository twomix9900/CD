import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {
  constructor(
    private _coinService: CoinService
  ) { }

  ngOnInit() {
  }

  mineCoins() {
    console.log('mineCoins invoked');
    this._coinService.mineCoins();
  }
}
