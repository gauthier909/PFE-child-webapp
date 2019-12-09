import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetsPlayComponent } from './lets-play/lets-play.component'
import { PartieComponent } from './partie/partie.component';
import {ChoixCategorieComponent} from './choix-categorie/choix-categorie.component'
import {ChoixHabitudeComponent} from './choix-habitude/choix-habitude.component'


const routes: Routes = [
  { path: '', component: LetsPlayComponent },
  { path: 'letsPlay', component: LetsPlayComponent },
  { path: 'partie', component: PartieComponent},
  { path:'choixCategorie',component: ChoixCategorieComponent},
  { path:'choixHabitude',component: ChoixHabitudeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
