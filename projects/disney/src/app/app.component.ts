import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'disney-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'disney';
}
