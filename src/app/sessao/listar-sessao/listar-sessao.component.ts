import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Sessao} from '../sessao';
import {Router} from '@angular/router';
import {SessaoService} from '../sessao.service';

@Component({
  selector: 'app-listar-sessao',
  templateUrl: './listar-sessao.component.html',
  styleUrls: ['./listar-sessao.component.css']
})
export class ListarSessaoComponent implements OnInit {

  sessoes: Observable<Sessao[]>;
  constructor(private rota: Router, private sessaoService: SessaoService) { }

  ngOnInit() {
    this.carregaDados();
  }

  carregaDados() {
    this.sessoes = this.sessaoService.getSessaoList();
  }

  deletaSessao(id: number) {
    this.sessaoService.delSessao(id).subscribe(data => {console.log(data);
      this.carregaDados(); }, error => console.log(error));
  }

  atualizaSessao(id: number) {
    this.rota.navigate(['update-sessao', id]);
  }
}
