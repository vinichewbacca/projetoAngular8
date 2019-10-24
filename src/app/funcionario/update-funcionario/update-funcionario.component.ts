import { Component, OnInit } from '@angular/core';
import {Funcionario} from '../funcionario';
import {FuncionarioService} from '../funcionario.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-funcionario',
  templateUrl: './update-funcionario.component.html',
  styleUrls: ['./update-funcionario.component.css']
})
export class UpdateFuncionarioComponent implements OnInit {

  id: number;
  func: Funcionario;
  constructor(private funcService: FuncionarioService, private rota1: Router, private rota2: ActivatedRoute) { }

  ngOnInit() {
    this.func = new Funcionario();
    this.id = this.rota2.snapshot.params['idf'];

    this.funcService.getFuncionario(this.id)
      .subscribe(data => {console.log(data);
      this.func = data; }, error => console.log(error));
  }

  rotaFuncionarios() {
    this.rota1.navigate(['listar-funcionarios']);
  }

  updateFuncionario() {
    this.funcService.updateFuncionario(this.id,this.func)
      .subscribe(data => console.log(data), error => console.log(error));
    this.func = new Funcionario();
    this.rotaFuncionarios();
  }

  onSubmit() {
    this.updateFuncionario();
  }

}
