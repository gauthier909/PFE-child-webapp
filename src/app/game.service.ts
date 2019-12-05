import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private choixCat = new BehaviorSubject<string>("message");
  currentMessage = this.choixCat.asObservable();


  constructor(private htpp:HttpClient) { }

  updateChoix(choixCat:string){
    this.choixCat.next(choixCat);
  }
  onLetsPlay(){
    //console.log('clicked');
    return this.htpp.get('https://reqres.in/api/users');
  }
}
