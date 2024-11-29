import { provideRouter, Routes, withHashLocation } from '@angular/router';
import { CountryPageComponent } from './core/countryPage.component';
import { DetailPageComponent } from './core/details-page/detailPage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    component: CountryPageComponent,
  },
  {
    path: 'details/:name',
    component: DetailPageComponent,
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

export const appRoutes = provideRouter(routes, withHashLocation());

// Configuración del Base HREF
export const APP_BASE_HREF = '/';
