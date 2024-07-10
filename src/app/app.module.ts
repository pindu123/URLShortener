import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {   ReactiveFormsModule } from '@angular/forms';
import { NgTinyUrlModule } from 'ng-tiny-url';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgTinyUrlModule,
     
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
