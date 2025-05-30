import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ReceitaService } from '../receita.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Receita } from '../receita';

@Component({
  selector: 'app-lista-ingredientes',
  imports: [CardComponent, CommonModule],
  templateUrl: './lista-ingredientes.component.html',
  styleUrl: './lista-ingredientes.component.css'
})

export class ListaIngredientesComponent implements OnInit {

 ingredientes: string[] = [];
 private sub!: Subscription; //um objeto que representa um recurso descartável, geralmente a execução de um Observable

 title: string = '';
 private subTitle!: Subscription;

  constructor(private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.sub = this.receitaService.getIngredientesSelecionados()
      .subscribe(lista => this.ingredientes = lista);
//Observáveis ​​são declarativos. definimos uma função para publicar valores — a fonte —
//mas essa função não é executada até que um consumidor assine o observável chamando o subscribe método do observável.

    this.subTitle = this.receitaService.getNomeReceita().subscribe(nome => this.title = nome);
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
    if (this.subTitle) this.subTitle.unsubscribe()
  }

}



