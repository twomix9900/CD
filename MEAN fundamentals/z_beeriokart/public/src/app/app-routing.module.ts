import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { FAQComponent } from './faq/faq.component';
import { HistoryComponent } from './history/history.component';
import { AddRacesComponent } from './add-races/add-races.component';
import { AddGroupsComponent } from './add-groups/add-groups.component';
import { PersonalStatsComponent } from './personal-stats/personal-stats.component';
import { GroupStatsComponent } from './group-stats/group-stats.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'add-races', component: AddRacesComponent },
  { path: 'add-groups', component: AddGroupsComponent },
  { path: 'personal-stats', component: PersonalStatsComponent },
  { path: 'group-stats', component: GroupStatsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
