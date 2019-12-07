import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Router } from '@angular/router';
import { CategorieService } from 'src/services/categorie.service';
import { Categorie } from '../classes/categorie';

@Component({
  selector: 'app-choix-categorie',
  templateUrl: './choix-categorie.component.html',
  styleUrls: ['./choix-categorie.component.css']
})
export class ChoixCategorieComponent implements OnInit {

  categories : string[];
  public choixCat:string;

  constructor(private gameService:GameService,private router: Router,
    private categorieService : CategorieService) { }

  ngOnInit() {
    this.getCategories();
    this.gameService.currentMessage.subscribe(choixCat => this.choixCat = choixCat)
  }

  clickChoixCat(value:string){
    console.log(value);
    this.choixCat = value;
    this.gameService.updateChoix(this.choixCat);
    this.router.navigateByUrl('/partie');
  }
  getCategories() : void {
    this.categorieService.getCategories().subscribe(categories => this.categories = categories)
    console.log(this.categories)
   }

}
