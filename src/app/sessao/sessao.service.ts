import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sessao} from './sessao';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  private baseUrl = 'http://localhost:8080/sessao';
  constructor(private http: HttpClient) { }

  getSessao(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/busca-sessao-id/${id}`);
  }

  getSessaoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lista-sessao`);
  }

  saveSessao(sessao: Sessao): Observable<any> {
    return this.http.post(`${this.baseUrl}/cad-sessao`, sessao);
  }

  updateSessao(id: number, valor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/upd-sessao/${id}`, valor);
  }

  delSessao(id: number) {
    return this.http.delete(`${this.baseUrl}/del-sessao/${id}`, {responseType: 'text'});
  }
}
