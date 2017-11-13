import { Component} from '@angular/core';
import {NaviComponent} from './navi.component';

@Component({
  selector: 'my-app',
  template: `
  <navi></navi>
  <router-outlet></router-outlet>
    `,
})
export class AppComponent  { 

 }
