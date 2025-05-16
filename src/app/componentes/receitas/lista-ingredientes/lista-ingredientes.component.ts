import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Receita } from '../receita';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-ingredientes',
  imports: [CardComponent, CommonModule],
  templateUrl: './lista-ingredientes.component.html',
  styleUrl: './lista-ingredientes.component.css'
})
export class ListaIngredientesComponent {
   dados!: Receita;
}
