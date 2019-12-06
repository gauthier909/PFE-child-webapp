import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { PartieComponent } from './partie/partie.component';
import { ChoixCategorieComponent } from './choix-categorie/choix-categorie.component';
import { FiltreAimeComponent } from './filtre-aime/filtre-aime.component';
import { FiltreAideComponent } from './filtre-aide/filtre-aide.component';
import { FiltreContentComponent } from './filtre-content/filtre-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LetsPlayComponent,
    PartieComponent,
    ChoixCategorieComponent,
    FiltreAimeComponent,
    FiltreAideComponent,
    FiltreContentComponent
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
