import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IframesRoutingModule } from './iframes-routing.module';
import { IframesComponent } from './iframes.component';


@NgModule({
  declarations: [IframesComponent],
  imports: [
    CommonModule,
    IframesRoutingModule
  ]
})
export class IframesModule { }
