import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InserirComponent } from './filme/inserir/inserir.component';
import { UpdateComponent } from './filme/update/update.component';
import { DeleteComponent } from './filme/delete/delete.component';
import { ListarComponent } from './filme/listar/listar.component';
import {FilmeService} from './filme/filme.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { InserirClienteComponent } from './cliente/inserir-cliente/inserir-cliente.component';
import { ListarFuncComponent } from './funcionario/listar-func/listar-func.component';
import { UpdateClienteComponent } from './cliente/update-cliente/update-cliente.component';
import { UpdateFuncionarioComponent } from './funcionario/update-funcionario/update-funcionario.component';
import { InserirFuncionarioComponent } from './funcionario/inserir-funcionario/inserir-funcionario.component';
import { ListarSessaoComponent } from './sessao/listar-sessao/listar-sessao.component';
import { InserirSessaoComponent } from './sessao/inserir-sessao/inserir-sessao.component';
import {UpdateSessaoComponent} from './sessao/update-sessao/update-sessao.component';


@NgModule({
  declarations: [
    AppComponent,
    InserirComponent,
    UpdateComponent,
    DeleteComponent,
    ListarComponent,
    HomeComponent,
    ListarClienteComponent,
    InserirClienteComponent,
    ListarFuncComponent,
    UpdateClienteComponent,
    UpdateFuncionarioComponent,
    InserirFuncionarioComponent,
    ListarSessaoComponent,
    InserirSessaoComponent,
    UpdateSessaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [FilmeService]

})
export class AppModule { }
