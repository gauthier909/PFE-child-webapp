import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { PartieComponent } from './partie/partie.component';

@NgModule({
  declarations: [
    AppComponent,
    LetsPlayComponent,
    PartieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
