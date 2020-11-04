import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeComponent } from 'projects/anime/src/public-api';
import { AppComponent as MarvelComponent } from '../../projects/marvel/src/app/app.component';

const routes: Routes = [
  {
    path: 'marvel',
    component: MarvelComponent,
  },
  {
    path: 'dc',
    loadChildren: () => import('../../projects/dc/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'anime',
    component: AnimeComponent,
  },
  { path: 'iframes', loadChildren: () => import('./pages/iframes/iframes.module').then(m => m.IframesModule) },
  { path: 'anime-dev', loadChildren: () => import('./pages/anime-dev/anime-dev.module').then(m => m.AnimeDevModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
