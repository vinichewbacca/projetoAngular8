import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Funcionario} from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseUrl = 'http://localhost:8080/funcionario';
  constructor(private http: HttpClient) { }

  getFuncionario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/busca-funcionario-id/${id}`);
  }

  getFuncionarioList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lista-funcionario`);
  }

  saveFuncionario(funcionario: Funcionario): Observable<any> {
    return this.http.post(`${this.baseUrl}/cad-funcionario`, funcionario);
  }

  updateFuncionario(id: number, valor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/upd-funcionario/${id}`, valor);
  }

  delFuncionario(id: number) {
    return  this.http.delete(`${this.baseUrl}/del-funcionario/${id}`, {responseType: 'text'});
  }
}
