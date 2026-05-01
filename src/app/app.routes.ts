import { Routes } from '@angular/router';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';
import { SearchComponent } from './features/search/search.component';
import { DetailComponent } from './features/detail/detail.component';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cataleg', pathMatch: 'full' },
  { path: 'cataleg', component: CatalegPageComponent },
  { path: 'cerca', component: SearchComponent },
  { path: 'detall/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'preferits', component: CatalegPageComponent },
  { path: '**', redirectTo: 'cataleg' }
];