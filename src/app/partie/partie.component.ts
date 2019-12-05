import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {

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
    console.log(this.images);
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
