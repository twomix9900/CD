import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './material-module/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FAQComponent } from './faq/faq.component';
import { HistoryComponent } from './history/history.component';
import { AddRacesComponent } from './add-races/add-races.component';
import { AddGroupsComponent } from './add-groups/add-groups.component';
import { PersonalStatsComponent } from './personal-stats/personal-stats.component';
import { GroupStatsComponent } from './group-stats/group-stats.component';
import { RandomRaceComponent } from './random-race/random-race.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavigationComponent,
    FAQComponent,
    HistoryComponent,
    AddRacesComponent,
    AddGroupsComponent,
    PersonalStatsComponent,
    GroupStatsComponent,
    RandomRaceComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
