import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-choix-habitude',
  templateUrl: './choix-habitude.component.html',
  styleUrls: ['./choix-habitude.component.css']
})
export class ChoixHabitudeComponent implements OnInit {

  constructor(private gameService:GameService) { }

  public choixCat:string;
  public tabImagesCategorie:string[];

  ngOnInit() {

    this.gameService.currentMessage.subscribe(choixCat => this.choixCat = choixCat);
    this.gameService.getAllImagesByCategorie(this.choixCat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).subscribe(images => {
      this.tabImagesCategorie = images
      console.log(this.tabImagesCategorie)
    })
    
  }



}
