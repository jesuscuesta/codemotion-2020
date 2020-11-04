import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IframesComponent } from './iframes.component';

const routes: Routes = [{ path: '', component: IframesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IframesRoutingModule { }
