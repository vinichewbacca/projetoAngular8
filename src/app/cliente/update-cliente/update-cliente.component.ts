/* tslint:disable:no-string-literal */
import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';
import {ActivatedRoute, Router} from '@angular/router';
import {ClienteService} from '../cliente.service';
import {Filme} from '../../filme';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  id: number;
  cliente: Cliente;
  submitted: true;

  constructor(private route: ActivatedRoute, private rota2: Router, private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente(); /*estancia um novo objeto cliente*/
    this.id = this.route.snapshot.params['idc'];

    this.clienteService.getCliente(this.id)
      .subscribe(data => {console.log(data);
                          this.cliente = data; }, error => console.log(error));
  }

  rotaListaCliente() {
    this.rota2.navigate(['listar-clientes']);
  }

  updateCliente() {
    this.clienteService.updateCliente(this.id, this.cliente)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cliente = new Cliente();
    this.rotaListaCliente();
  }

  onSubmit() {
    this.updateCliente();
  }

}
