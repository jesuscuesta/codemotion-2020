import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimeDevComponent } from './anime-dev.component';

const routes: Routes = [{ path: '', component: AnimeDevComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeDevRoutingModule { }
