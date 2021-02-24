import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'first-start-page',
    loadChildren: () => import('./pages/first-start-page/first-start-page.module').then(m => m.FirstStartPagePageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then(m => m.PreferencesPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule)
  },
  {
    path: 'productor-list',
    loadChildren: () => import('./pages/productor-list/productor-list.module').then( m => m.ProductorListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
