import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { Autor } from '../autor/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private baseApiUrl = environment.baseApiURL;
  private apiUrl = `${this.baseApiUrl}/api/autores`;
  constructor(private http: HttpClient) { }

  cadastraAutor(autor: Autor):Observable<Autor>{
    return this.http.post<Autor>(this.apiUrl, autor);
  }

  listaAutores(): Observable<Autor[]>{
    return this.http.get<Autor[]>(this.apiUrl);
  }

  buscaAutor(id: number):Observable<Autor>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Autor>(url);
  }

  editarAutor(id: number, autor: Autor):Observable<Autor>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Autor>(url, autor);
  }
}
