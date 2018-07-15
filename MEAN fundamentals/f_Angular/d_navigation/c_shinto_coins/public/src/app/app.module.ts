import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { CoinService } from './coin.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BurbankComponent } from './burbank/burbank.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { MineCoinsComponent } from './mine-coins/mine-coins.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { HomeComponent } from './home/home.component';
import { LedgerTransactionDetailsComponent } from './ledger-transaction-details/ledger-transaction-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    PageNotFoundComponent,
    MineCoinsComponent,
    BuyCoinsComponent,
    SellCoinsComponent,
    BrowseLedgerComponent,
    HomeComponent,
    LedgerTransactionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService, CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }