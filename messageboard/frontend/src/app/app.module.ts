import { NgModule }      from '@angular/core';
import { RouterModule }      from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { MessagesComponent } from './messages-component';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

import { WebService }  from './web.service';

import {NewMessageComponent} from './new-message.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NaviComponent} from './navi.component';
import {HomeComponent} from './home.component';
import {RegisterComponent} from './register.component';
import {AuthService} from './auth.service';
import {LoginComponent} from './login.component';

var routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'messages',
  component:MessagesComponent
},
{
  path:'messages/:name',
  component:MessagesComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'login',
  component:LoginComponent
}
];

@NgModule({
  imports:      [ BrowserModule, MaterialModule,HttpModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,MessagesComponent,NewMessageComponent,NaviComponent,HomeComponent,RegisterComponent,LoginComponent],
  bootstrap:    [ AppComponent],
  providers: [WebService,AuthService]
})
export class AppModule { }
