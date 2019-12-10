import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { ChannelComponent } from './channel/channel.component';
import { PartieComponent } from './partie/partie.component';
import { ChoixCategorieComponent } from './choix-categorie/choix-categorie.component';
import { FiltreAimeComponent } from './filtre-aime/filtre-aime.component';
import { FiltreAideComponent } from './filtre-aide/filtre-aide.component';
import { FiltreContentComponent } from './filtre-content/filtre-content.component';
import { ChoixHabitudeComponent } from './choix-habitude/choix-habitude.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LetsPlayComponent,
    ChannelComponent,
    PartieComponent,
    ChoixCategorieComponent,
    FiltreAimeComponent,
    FiltreAideComponent,
    FiltreContentComponent,
    ChoixHabitudeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
