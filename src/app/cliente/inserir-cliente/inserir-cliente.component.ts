import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';
import {ClienteService} from '../cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.css']
})
export class InserirClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted = false;
  constructor(private clienteService: ClienteService, private rota: Router) { }

  ngOnInit() {
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = new Cliente();
  }

  /*metodo de rota para a lista de clientes*/
  rotaListaCliente() {
    this.rota.navigate(['/listar-clientes']);
  }

  saveCliente() {
    this.clienteService.saveCliente(this.cliente)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cliente = new Cliente();
    this.rotaListaCliente();
  }

  onSubmit() {
    this.submitted = true;
    this.saveCliente();
  }

}
