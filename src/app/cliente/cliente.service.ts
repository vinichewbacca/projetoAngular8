import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) { }

  getCliente(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/busca-cliente-id/${id}`);
  }

  getClienteList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar-clientes`);
  }

  saveCliente(cliente: Cliente): Observable<any> {
    return this.http.post(`${this.baseUrl}/cad-cliente`, cliente);
  }

  updateCliente(id: number, valor: Cliente): Observable<any> {
    return this.http.put(`${this.baseUrl}/upd-cliente/${id}`, valor);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/del-cliente/${id}`, {responseType: 'text'});
  }
}
