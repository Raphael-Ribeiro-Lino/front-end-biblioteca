import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Livro } from '../livro/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private baseApiUrl = environment.baseApiURL;
  private apiUrl = `${this.baseApiUrl}/api/livros`;
  constructor(private http: HttpClient) { }

  cadastraLivro(livro: Livro):Observable<Livro>{
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  listaLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.apiUrl)
  }

  buscaLivro(id: number):Observable<Livro>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Livro>(url)
  }

  editarLivro(id: number, livro: Livro):Observable<Livro>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Livro>(url, livro);
  }

  removerLivro(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
