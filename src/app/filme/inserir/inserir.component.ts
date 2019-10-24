import { Component, OnInit } from '@angular/core';
import {Filme} from '../../filme';
import {FilmeService} from '../filme.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent implements OnInit {
  filme: Filme = new Filme(); /*instancia um novo objeto filme*/
  submitted = false;
  constructor(private filmeService: FilmeService,
              private rota: Router) { } /*Variaveis para chamar os metodos de filmeServie e para rotas*/

  ngOnInit() {
  }

  newFilme(): void {
    this.submitted = false;
    this.filme = new Filme();
  }
  /*Metodo para direcionar para a lista de filmes*/
  rotaListaFilme() {
    this.rota.navigate(['/listar-filmes']);
  }
  save() {
    this.filmeService.saveFilme(this.filme)
      .subscribe(data => console.log(data), error => console.log(error)); /*salva o filme*/
    this.filme = new Filme();
    this.rotaListaFilme(); /*após salvar mostrar a lista de filme*/
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
