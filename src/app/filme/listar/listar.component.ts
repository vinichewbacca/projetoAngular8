import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Filme} from '../../filme';
import {FilmeService} from '../filme.service';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  filmes: Observable<Filme[]>;
  constructor(private filmeService: FilmeService, private rota: Router) { }

  ngOnInit() {
    this.reloadData();
  }



  reloadData() {
    this.filmes = this.filmeService.getFilmesList();
  }

  deletarFilme(id: number) {

    this.filmeService.deleteFilme(id).subscribe(data => {console.log(data); this.reloadData(); } ,
      // tslint:disable-next-line:no-shadowed-variable
        error => console.log(error));

  }

  atualizaFilme(id: number) {
    this.rota.navigate(['update-filme', id]);
  }

}
