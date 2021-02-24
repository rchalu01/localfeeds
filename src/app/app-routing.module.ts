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
    path: 'productor-list',
    loadChildren: () => import('./pages/productor-list/productor-list.module').then( m => m.ProductorListPageModule)
  },
  {
    path: 'announcement-list',
    loadChildren: () => import('./pages/announcement-list/announcement-list.module').then( m => m.AnnouncementListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
