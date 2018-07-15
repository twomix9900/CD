import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { AllCakesComponent } from './all-cakes/all-cakes.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCakesComponent,
    CakeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
