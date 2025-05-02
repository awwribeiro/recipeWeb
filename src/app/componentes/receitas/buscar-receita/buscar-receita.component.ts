import { ReceitaService } from './../receita.service';
import { Component, EventEmitter, Output } from '@angular/core'; //usados para emitir eventos do componente filho para o pai.
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-receita',
  templateUrl: './buscar-receita.component.html',
  styleUrl: './buscar-receita.component.css',
  imports: [FormsModule]
})
// Define o componente de busca e importa o FormsModule para o uso do ngModel.

export class BuscarReceitaComponent {
  termoBusca: string = '';
  // Armazena o valor digitado no input.

  @Output() buscar = new EventEmitter<string>();
//receitaCompleta: any;
  // Cria um evento buscar que emite uma string (o termo de busca) para o componente pai (AppComponent)..

  aoBuscar() {
    this.buscar.emit(this.termoBusca);
    // Emite o valor de 'termoBusca' sempre que o usuário digitar
  }
}
