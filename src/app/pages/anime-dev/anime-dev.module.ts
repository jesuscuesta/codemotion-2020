import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeDevRoutingModule } from './anime-dev-routing.module';
import { AnimeDevComponent } from './anime-dev.component';
import { AnimeModule } from '@anime/ejemplo';


@NgModule({
  declarations: [AnimeDevComponent],
  imports: [
    CommonModule,
    AnimeDevRoutingModule,
    AnimeModule
  ]
})
export class AnimeDevModule { }
