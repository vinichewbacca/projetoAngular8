import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InserirComponent} from './filme/inserir/inserir.component';
import {ListarComponent} from './filme/listar/listar.component';
import {HomeComponent} from './home/home.component';
import {UpdateComponent} from './filme/update/update.component';
import {ListarClienteComponent} from './cliente/listar-cliente/listar-cliente.component';
import {InserirClienteComponent} from './cliente/inserir-cliente/inserir-cliente.component';
import {ListarFuncComponent} from './funcionario/listar-func/listar-func.component';
import {UpdateClienteComponent} from './cliente/update-cliente/update-cliente.component';
import {UpdateFuncionarioComponent} from './funcionario/update-funcionario/update-funcionario.component';
import {InserirFuncionarioComponent} from './funcionario/inserir-funcionario/inserir-funcionario.component';
import {ListarSessaoComponent} from './sessao/listar-sessao/listar-sessao.component';
import {UpdateSessaoComponent} from './sessao/update-sessao/update-sessao.component';
import {InserirSessaoComponent} from './sessao/inserir-sessao/inserir-sessao.component';
import {LoginComponent} from './login/login.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inserir', component: InserirComponent},
  {path: 'inserir-clientes', component: InserirClienteComponent},
  {path: 'inserir-funcionario', component: InserirFuncionarioComponent},
  {path: 'inserir-sessao', component: InserirSessaoComponent},
  {path: 'update-filme/:idf', component: UpdateComponent},
  {path: 'update-cliente/:idc', component: UpdateClienteComponent},
  {path: 'update-funcionario/:idf', component: UpdateFuncionarioComponent},
  {path: 'update-sessao/:ids', component: UpdateSessaoComponent},
  {path: 'listar-filmes', component: ListarComponent},
  {path: 'listar-clientes', component: ListarClienteComponent},
  {path: 'listar-funcionarios', component: ListarFuncComponent},
  {path: 'listar-sessoes', component: ListarSessaoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
