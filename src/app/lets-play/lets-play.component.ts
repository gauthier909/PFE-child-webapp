import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GameService} from '../game.service';


@Component({
  selector: 'app-lets-play',
  templateUrl: './lets-play.component.html',
  styleUrls: ['./lets-play.component.css']
})
export class LetsPlayComponent implements OnInit {

  users:Object;

  constructor(private data:GameService) { }

  ngOnInit() {

  }
  
  
  onLetsPlay(){
    this.data.onLetsPlay().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });

    

  }

}
