import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventComponent } from './event/event.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'event', component: EventComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'event-details/:index', component: EventDetailsComponent },
  { path: '', redirectTo: '/home-component', pathMatch: 'full' },
  { path: '*', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
