import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-ledger-transaction-details',
  templateUrl: './ledger-transaction-details.component.html',
  styleUrls: ['./ledger-transaction-details.component.css']
})
export class LedgerTransactionDetailsComponent implements OnInit {
  _ledgerDetails: object;
  _transactionId: number;
  _ledgerId: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _coinService: CoinService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._ledgerId = params['id'];
      this.showLedger();
    });
  }

  showLedger() {
    let temp = this._coinService.showLedger();
    this._ledgerDetails = temp[this._ledgerId];
    this._transactionId = this._ledgerId ++;
  }

}
