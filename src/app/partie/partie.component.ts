import { Component, OnInit , Input } from '@angular/core';
import { GameService } from "../../services/game.service";
import {Filtre} from './filtre'



@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {

  @Input() imgPath:string = "/images/deplacements/";
  imgFileName:string = "bus.jpg";

  public isOnAime=false; //Pour permettre l'affichage du bon filtre au bon moment
  public isOnAide=false;
  public isOnContent=false;
  public choixCat:string;
  public tabImages; // tableau contenant toutes les images de la DB
  public ordreFiltre; //tableau contenant l'odre dans lequel les filtres apparaissent
  public filtre; //Le filtre actuel

  public images:{id:number,nom:string,categorie:string}[];
  public indexImage = 0;
  public indexFiltre=0;

  constructor(private gameService:GameService) { 
    this.ordreFiltre = gameService.ordreFiltreDefault;
    this.images = [
      {
        "id": 0,
        "nom": "https://placehold.it/350x340",
        "categorie": "sport"
      },
      {
        "id": 1,
        "nom": "https://placehold.it/350x341",
        "categorie": "sport"
      },
      {
        "id": 2,
        "nom": "https://placehold.it/350x342",
        "categorie": "sport"
      },
      {
        "id": 3,
        "nom": "https://placehold.it/350x343",
        "categorie":"sport"
      }
    ];
  }

  ngOnInit() {
    //console.log(this.images);

    //Observer
    this.gameService.currentMessage.subscribe(choixCat => this.choixCat = choixCat);
    this.ordreFiltre = this.gameService.ordreFiltreDefault;

    this.filtre = this.ordreFiltre[this.indexFiltre];
    this.switchFiltre();

  }

  onOui(){
    console.log(this.images)
    console.log(this.images.length);
    console.log(this.images[this.indexImage].nom)
    let nomCurrentImage:string=this.images[this.indexImage].nom
    let choix:Object={
      nomImage:nomCurrentImage,
      valeur:0
    }
    this.insertFiltre("",this.ordreFiltre[this.indexFiltre],choix)
    if(this.indexImage +1 >= this.images.length){
      this.indexFiltre++;
      this.switchFiltre();
      if(this.indexFiltre >=this.ordreFiltre.length){
        //fin partie
        console.log("fin partie")
      }
      
    }
    this.indexImage++;
  }

  onNon(){
    let nomCurrentImage:string=this.images[this.indexImage].nom
    let choix:Object={
      nomImage:nomCurrentImage,
      valeur:1
    }
    this.insertFiltre("",this.ordreFiltre[this.indexFiltre],choix)
    if(this.indexImage + 1 >= this.images.length){
      this.indexFiltre++;
      this.switchFiltre();
      if(this.indexFiltre >=this.ordreFiltre.length){
        //fin partie
        console.log("fin partie")
      }
    }
    this.indexImage++;
  }

  onJsp(){
    let nomCurrentImage:string=this.images[this.indexImage].nom
    let choix:Object={
      nomImage:nomCurrentImage,
      valeur:2
    }
    this.insertFiltre("",this.ordreFiltre[this.indexFiltre],choix)
    if(this.indexImage + 1 >= this.images.length){
      this.switchFiltre();
      this.indexFiltre++;
      if(this.indexFiltre >=this.ordreFiltre.length){
        //fin partie
        console.log("fin partie")
      }
    }
    this.indexImage++;
  }

  insertFiltre(commentaire: string,nom: string,choix: Object){
    //console.log('insertion from component')
    this.gameService.insertFiltre({commentaire,nom,choix} as Filtre).subscribe(filtre => {
      console.log('insert filtre')
    })
  }



  switchFiltre(){
    this.indexImage = 0;
    if(this.ordreFiltre[this.indexFiltre] === 'J\'aime'){
      this.isOnAide=false;
      this.isOnContent = false;
      this.isOnAime= true;
      console.log('switch')
    }

    if(this.ordreFiltre[this.indexFiltre] === 'Avec aide'){
      this.isOnAime = false;
      this.isOnContent = false;
      this.isOnAide= true;
      console.log('switch')
    }

    if(this.ordreFiltre[this.indexFiltre] === 'Content'){
      this.isOnAime = false;
      this.isOnAide = false;
      this.isOnContent= true;
      console.log('switch')
    }
  }

}
