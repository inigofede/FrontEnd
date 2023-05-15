import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'https://backend-hfia.onrender.com/personas/';
  constructor(private http: HttpClient) {}

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
}

//http://localhost:8080/personas/traer/perfil