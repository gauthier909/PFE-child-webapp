import { Component, OnInit } from '@angular/core';
import { GameService } from "../game.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix-categorie',
  templateUrl: './choix-categorie.component.html',
  styleUrls: ['./choix-categorie.component.css']
})
export class ChoixCategorieComponent implements OnInit {

  public categories:any=['Deplacement',"Habitation","Loisirs","Nutrition","Relations","Responsabilités","Soins"];
  public choixCat:string;
  constructor(private gameService:GameService,private router: Router) { }

  ngOnInit() {
    this.gameService.currentMessage.subscribe(choixCat => this.choixCat = choixCat)
  }

  clickChoixCat(value:string){
    console.log(value);
    this.choixCat = value;
    this.gameService.updateChoix(this.choixCat);
    this.router.navigateByUrl('/partie');
  }

}
