import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  _coins = 0;
  _ledger: object [] = [];
  constructor() { }

  showCoins() {
    return this._ledger;
  }

  mineCoins() {
    this._coins++;
    this._ledger.push({ 'action': 'mined', 'quantity': 1, 'value': this._coins });
    return this._coins;
  }

  buyCoins(quantity) {
    this._coins += quantity;
    this._ledger.push({ 'action': 'purchase', 'quantity': quantity, 'value': this._coins });
    return this._coins;
  }

  sellCoins(quantity) {
    this._coins -= quantity;
    this._ledger.push({ 'action': 'sell', 'quantity': quantity, 'value': this._coins });
  }

  showLedger() {
    return this._ledger;
  }

}
