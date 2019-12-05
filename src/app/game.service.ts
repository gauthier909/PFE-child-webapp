import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private htpp:HttpClient) { }

  onLetsPlay(){
    //console.log('clicked');
    return this.htpp.get('https://reqres.in/api/users');
  }
}
