import {Filme} from '../filme';
import {Cliente} from '../cliente/cliente';

export class Sessao {
   idSessao: number;
   horario: string;
   sala: string;
   idFilme: Filme = new Filme();
   idCliente: Cliente = new Cliente();
}
