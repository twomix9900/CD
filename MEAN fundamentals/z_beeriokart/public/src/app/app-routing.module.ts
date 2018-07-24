import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { FAQComponent } from './faq/faq.component';
import { HistoryComponent } from './history/history.component';
import { AddRaceComponent } from './add-race/add-race.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'add-race', component: AddRaceComponent },
  { path: 'manage-groups', component: ManageGroupsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
