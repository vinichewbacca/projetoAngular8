/* tslint:disable:no-string-literal */
import { Component, OnInit } from '@angular/core';
import {Filme} from '../../filme';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmeService} from '../filme.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number; /*responsavel por guardar o id do filme selecionado*/
  filme: Filme;
  submitted: true;

  /*responsavel por armazenar o filme*/

  constructor(private route: ActivatedRoute, private rota2: Router,
              private filmeServie: FilmeService) { }

  ngOnInit() {
    this.filme = new Filme(); /*estancia um novo objeto filme*/
    this.id = this.route.snapshot.params['idf'];

    this.filmeServie.getFilme(this.id)
      .subscribe(data => {console.log(data);
                          this.filme = data; }, error => console.log(error));
  }

  updateFilme() {
    this.filmeServie.updateFilme(this.id, this.filme)
      .subscribe(data => console.log(data), error => console.log(error));
    this.filme = new Filme();
    this.rotaListaFilme();
  }

  rotaListaFilme() {
    this.rota2.navigate(['listar-filmes']);
}

  onSubmit() {
    this.updateFilme();
  }
}
