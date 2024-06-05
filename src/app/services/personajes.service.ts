import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../common/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  
  URL = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getPersonajes():Observable<Personaje>{
    return this.http.get<Personaje>(this.URL)
  }
}
