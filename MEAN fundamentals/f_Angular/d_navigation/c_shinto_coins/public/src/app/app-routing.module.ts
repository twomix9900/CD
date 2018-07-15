import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { MineCoinsComponent } from './mine-coins/mine-coins.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { HomeComponent } from './home/home.component';
import { LedgerTransactionDetailsComponent } from './ledger-transaction-details/ledger-transaction-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'mine-coins', component: MineCoinsComponent },
  { path: 'buy-coins', component: BuyCoinsComponent },
  { path: 'sell-coins', component: SellCoinsComponent },
  { path: 'browse-ledger', component: BrowseLedgerComponent },
  { path: 'ledger-details/:id', component: LedgerTransactionDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
