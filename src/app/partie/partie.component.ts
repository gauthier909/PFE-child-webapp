import { Component, OnInit , Input } from '@angular/core';
import { GameService } from "../game.service";

const ROUTE = 'http://localhost:8080/partie';
const ROUTE_IMAGES = 'http://localhost:8080/partie/images';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {

  @Input() imgPath:string = "/images/deplacements/";
  imgFileName:string = "bus.jpg";

  public isOnAime=false;
  public isOnAide=false;
  public isOnContent=false;
  public data;
  public choixCat:string;
  public tabImages;
  public ordreFiltre;
  public filtre;

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

    
    fetch(ROUTE)
        .then(response => response.clone().json())
        .then(data => {
          console.log("Recieved data from Express API :", data)
          this.data = data
        })
        .catch(err => {
          console.error("Error :", err)
        })
    
    
  }

  onOui(){
    console.log(this.indexImage)
    console.log(this.images.length);
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
