import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { ChannelComponent } from './channel/channel.component';
import { PartieComponent } from './partie/partie.component';
import { ChoixCategorieComponent } from './choix-categorie/choix-categorie.component';
import { ChoixHabitudeComponent } from './choix-habitude/choix-habitude.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FinPartieComponent } from './fin-partie/fin-partie.component';

@NgModule({
  declarations: [
    AppComponent,
    LetsPlayComponent,
    ChannelComponent,
    PartieComponent,
    ChoixCategorieComponent,
    ChoixHabitudeComponent,
    FinPartieComponent
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
