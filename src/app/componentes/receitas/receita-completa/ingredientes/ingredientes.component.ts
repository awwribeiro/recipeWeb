import { Component } from '@angular/core';
import { Receita } from '../../receita';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from '../../receita.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredientes',
  imports: [CommonModule],
  templateUrl: './ingredientes.component.html',
  styleUrl: './ingredientes.component.css'
})
export class IngredientesComponent {
  dados!: Receita;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private receitaService: ReceitaService) {}

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
        this.router.navigate([{ outlets: { receitaFav: ['lista-ingredientes'] } }]); //abre o componente listaIngredientes
    }
  }

}
