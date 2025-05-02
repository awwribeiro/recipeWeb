//componente pai de ReceitaComponent
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
//Input(): permite receber dados de componentes pais.
//OnChanges: hook de ciclo de vida que detecta mudanças nas propriedades @Input.

import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';
import { CommonModule } from '@angular/common';
import { ReceitaComponent } from '../receita/receita.component';

@Component({
  selector: 'app-lista-receitas',
  standalone: true,
  imports: [CommonModule, ReceitaComponent],
  templateUrl: './lista-receitas.component.html',
  styleUrl: './lista-receitas.component.css'
})
// Componente que exibe a lista de receitas. É standalone e importa CommonModule e ReceitaComponent.

export class ListaReceitasComponent implements OnChanges {
  ngOnChanges(): void {
  }

  @Input() receitas: Receita[]= [];
  // Recebe o termo de busca como input do componente pai. (AppComponent)

}
