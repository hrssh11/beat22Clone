import { Routes } from '@angular/router';
import { ListingBeatComponent } from './core/listing-beat/listing-beat.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'beats',
    pathMatch: 'full', // required for redirect to work correctly
  },
  {
    path: 'beats',
    component: ListingBeatComponent,
  },
];
