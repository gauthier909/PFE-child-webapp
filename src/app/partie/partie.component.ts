import { Component, OnInit , Input } from '@angular/core';

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

  public data;
  public tabImages;

  public images:{id:number,nom:string,categorie:string}[];
  public index = 0;

  constructor() { 
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
    if(this.index >= this.images.length){
      //fin partie
    }
    this.index++;
  }

  onNon(){
    if(this.index >= this.images.length){
      //fin partie
    }
    this.index++;
  }

  onJsp(){
    if(this.index >= this.images.length){
      //fin partie
    }
    this.index++;
  }

}
