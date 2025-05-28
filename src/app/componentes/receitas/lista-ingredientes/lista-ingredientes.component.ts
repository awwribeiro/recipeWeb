import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ReceitaService } from '../receita.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-ingredientes',
  imports: [CardComponent, CommonModule],
  templateUrl: './lista-ingredientes.component.html',
  styleUrl: './lista-ingredientes.component.css'
})

export class ListaIngredientesComponent implements OnInit {
  ingredientes: string[] = [];

  constructor(private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.ingredientes = this.receitaService.getIngredientesSelecionados();
  }
}



