import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from '../../receita.service';
import { CommonModule } from '@angular/common';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredientes',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ingredientes.component.html',
  styleUrl: './ingredientes.component.css'
})
export class IngredientesComponent implements OnInit{
  ingredientes: string[] = [];
  private sub!: Subscription; //um objeto que representa um recurso descartável, geralmente a execução de um Observable

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.sub = this.receitaService.getIngredientesSelecionados()
      .subscribe(lista => this.ingredientes = lista);
//Observáveis ​​são declarativos. definimos uma função para publicar valores — a fonte —
//mas essa função não é executada até que um consumidor assine o observável chamando o subscribe método do observável.
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe(); //evitar memory leaks
  }

  private isOutletAtivo(nomeOutlet: string): boolean {
    const snapshot = this.router.routerState.snapshot; //guarda a estrutura completa das rotas carregadas no momento
    //.routerState acessa o estado atual das rotas
    //.snapshot captura um instantaneo estativo do estado atual da árvore de rotas
    return snapshot.root.children.some(child => child.outlet === nomeOutlet)
  }

  verListaCompras(){
    const estaAberto = this.isOutletAtivo('receitaFav');
    if(estaAberto){ //se o componente receitasFav esta aberto
        this.router.navigate([{ outlets: { receitaFav: null } }]) // Fecha o outlet atual
        .then(() => {
          this.router.navigate([{ outlets: { receitaFav: ['lista-ingredientes'] } }]); // Abre o novo componente no mesmo outlet
        });
    } else {
        this.router.navigate([{ outlets: { listaIngredientes: ['lista-ingredientes'] } }]); //abre o componente listaIngredientes
    }
  }

}
