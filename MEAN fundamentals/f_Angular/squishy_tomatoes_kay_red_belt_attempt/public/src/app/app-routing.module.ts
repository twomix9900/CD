import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/new', component: AddMovieComponent },
  { path: 'movies/:id', component: ReviewsComponent },
  { path: 'movies/:id/review', component: AddReviewComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
