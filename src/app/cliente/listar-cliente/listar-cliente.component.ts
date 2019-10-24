import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Cliente} from '../cliente';
import {ClienteService} from '../cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: Observable<Cliente[]>;
  constructor(private clienteService: ClienteService, private rota: Router) { }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clientes = this.clienteService.getClienteList();
  }

  delCliente(id: number) {
    this.clienteService.deleteCliente(id).subscribe(data => {console.log(data);
                                                             this.reloadData(); }, error => console.log(error));
  }

  atualizaCliente(id: number) {
    this.rota.navigate(['update-cliente', id]);
  }

}
