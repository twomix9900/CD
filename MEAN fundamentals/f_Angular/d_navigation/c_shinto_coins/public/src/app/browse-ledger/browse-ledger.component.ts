import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-browse-ledger',
  templateUrl: './browse-ledger.component.html',
  styleUrls: ['./browse-ledger.component.css']
})
export class BrowseLedgerComponent implements OnInit {
  _ledger: object [];

  constructor(
    private _coinService: CoinService
  ) { }

  ngOnInit() {
    this.showLedger();
  }

  showLedger() {
    this._ledger = this._coinService.showLedger();
    console.log('ledger = ', this._ledger);
  }

}
