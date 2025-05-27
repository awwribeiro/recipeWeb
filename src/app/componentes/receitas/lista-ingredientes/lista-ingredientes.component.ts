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


//ao clicar no botao "Adicionar à lista de compras" do componente receiplaCompleta
//abrir componente listaIngredientes ao lado do componente receitaCompleta
//se componente listaFavoritos estiver aberto, fechar e abrir listaIngredientes

//fixar componente card em 3 componentes fixos na tela inicial
//renderizando o conteúdo dos componente conforme chamados
