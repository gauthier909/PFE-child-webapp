import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetsPlayComponent } from './lets-play/lets-play.component'
import { PartieComponent } from './partie/partie.component';


const routes: Routes = [
  { path: '', component: LetsPlayComponent },
  { path: 'letsPlay', component: LetsPlayComponent },
  {path: 'partie', component: PartieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
