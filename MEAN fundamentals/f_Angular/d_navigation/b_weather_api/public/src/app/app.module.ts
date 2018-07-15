import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonDCComponent } from './washingtondc/washingtondc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { DojoComponent } from './dojo/dojo.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanJoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonDCComponent,
    ChicagoComponent,
    PageNotFoundComponent,
    DojoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }