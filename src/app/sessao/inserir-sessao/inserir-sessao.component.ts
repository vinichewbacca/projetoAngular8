import { Component, OnInit } from '@angular/core';
import {Sessao} from '../sessao';
import {Router} from '@angular/router';
import {SessaoService} from '../sessao.service';

@Component({
  selector: 'app-inserir-sessao',
  templateUrl: './inserir-sessao.component.html',
  styleUrls: ['./inserir-sessao.component.css']
})
export class InserirSessaoComponent implements OnInit {

  sessao: Sessao = new Sessao();
  submitted = false;

  constructor(private rota: Router, private sessaoService: SessaoService) { }

  ngOnInit() {
  }

  novaSessao(): void {
    this.submitted = false;
    this.sessao = new Sessao();
  }

  rotaSessoes() {
    this.rota.navigate(['/listar-sessoes']);
  }

  save() {
    this.sessaoService.saveSessao(this.sessao)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sessao = new Sessao();
    this.rotaSessoes();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
