import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent as MarvelComponent } from '../../projects/marvel/src/app/app.component';

const routes: Routes = [
  {
    path: 'marvel',
    component: MarvelComponent,
  },
  {
    path: 'dc',
    loadChildren: () => import('../../projects/dc/src/app/app.module').then(m => m.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
