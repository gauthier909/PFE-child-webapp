import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable,of } from 'rxjs';
import {Filtre} from '../app/partie/filtre';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private partieUrl = 'http://localhost:8080/partie';
  private filtreUrl = 'http://localhost:8080/partie/filtre';
  private imageUrl = 'http://localhost:8080/partie/images';

  private choixCat = new BehaviorSubject<string>("message");
  currentMessage = this.choixCat.asObservable();

  ordreFiltreDefault:any=['J\'aime','Avec aide','Content'];


  constructor(private http:HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  updateChoix(choixCat:string){
    this.choixCat.next(choixCat);
  }

  insertFiltre(filtre:Filtre):Observable<Filtre>{
    //console.log('insert filtre from service')
    return this.http.post<Filtre>(this.filtreUrl, filtre, this.httpOptions).pipe(
      tap((newFiltre: Filtre) => console.log(`added filtre w/ id=${newFiltre._id}`)),
      catchError(this.handleError<Filtre>('addFiltre'))
    );
  }

  onLetsPlay(){
    //console.log('clicked');
    return this.http.get('https://reqres.in/api/users');
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
