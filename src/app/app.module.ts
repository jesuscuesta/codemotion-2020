import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule as MarvelModule } from '../../projects/marvel/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarvelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
