import { Component, OnInit } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'front-enfant';

  constructor(
    private swUpdate:SwUpdate
  ){}

  ngOnInit(){
    this.reloadCache();

  }

  //update l'appli des qu'il y a un changment (pwa)
  reloadCache(){
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(()=>{
        if(confirm("New version available! Update ?")){
          window.location.reload();
        }
      })
    }
  }
}
