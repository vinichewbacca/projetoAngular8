import { Component, OnInit } from '@angular/core';
import {Funcionario} from '../funcionario';
import {FuncionarioService} from '../funcionario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.css']
})
export class InserirFuncionarioComponent implements OnInit {

  func: Funcionario = new Funcionario();
  submitted = false;

  constructor(private funcService: FuncionarioService, private rota: Router) { }

  ngOnInit() {
  }

  novoFuncionario(): void {
    this.submitted = false;
    this.func = new Funcionario();
  }

  rotaFuncionarios() {
    this.rota.navigate(['/listar-funcionarios']);
  }

  save() {
    this.funcService.saveFuncionario(this.func)
      .subscribe(data => console.log(data), error => console.log(error));
    this.func = new Funcionario();
    this.rotaFuncionarios();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
