import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Filme} from '../filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private baseUrl = 'http://localhost:8080/filme';
  constructor(private http: HttpClient) { }

  getFilme(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/busca-filme-id/${id}`);
  }

  getFilmesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar-filmes`);
  }

  deleteFilme(id: number): Observable<any> {
    return  this.http.delete(`${this.baseUrl}/del-filme/${id}`, {responseType: 'text'});
  }

  saveFilme(filme: Filme): Observable<any> {
    return this.http.post(`${this.baseUrl}/cad-filme`, filme);
  }

  updateFilme(id: number, valor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/upd-filme/${id}`, valor);
  }
}
