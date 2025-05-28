import { Receita } from './../receita';
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReceitaService } from '../receita.service';
import { CardComponent } from '../card/card.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';

@Component({
  selector: 'app-receita-completa',
  imports: [CommonModule, CardComponent, RouterModule, ApresentacaoComponent],
  templateUrl: './receita-completa.component.html',
  styleUrl: './receita-completa.component.css'
})
export class ReceitaCompletaComponent {
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

