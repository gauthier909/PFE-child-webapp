import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-filtre-aime',
  templateUrl: './filtre-aime.component.html',
  styleUrls: ['./filtre-aime.component.css']
})
export class FiltreAimeComponent implements OnInit {

  constructor(private gameService:GameService) { 
    
  }

  ngOnInit() {
  }

}
