import { Component} from '@angular/core';
import { MessagesComponent } from './messages-component';
import { NewMessageComponent } from './new-message.component';
import {NaviComponent} from './navi.component';

@Component({
  selector: 'home',
  template: `
      <new-messages></new-messages>
       <messages></messages>`,
})
export class HomeComponent  { 

 }
