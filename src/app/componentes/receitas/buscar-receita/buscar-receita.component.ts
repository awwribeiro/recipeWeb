
import { Component, EventEmitter, Output } from '@angular/core'; //usados para emitir eventos do componente filho para o pai.
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-receita',
  templateUrl: './buscar-receita.component.html',
  styleUrl: './buscar-receita.component.css',
  imports: [FormsModule, RouterModule]
})
// Define o componente de busca e importa o FormsModule para o uso do ngModel.

export class BuscarReceitaComponent {
  termoBusca: string = '';
  // Armazena o valor digitado no input.

  @Output() buscar = new EventEmitter<string>();
  // Cria um evento buscar que emite uma string (o termo de busca) para o componente pai (AppComponent)..

  aoBuscar() {
    this.buscar.emit(this.termoBusca);
    // Emite o valor de 'termoBusca' sempre que o usuário digitar
  }

    constructor(private router: Router, private route: ActivatedRoute){}

    private isOutletAtivo(nomeOutlet: string): boolean {
      const snapshot = this.router.routerState.snapshot; //guarda a estrutura completa das rotas carregadas no momento
      //.routerState acessa o estado atual das rotas
      //.snapshot captura um instantaneo estativo do estado atual da árvore de rotas

      return snapshot.root.children.some(child => child.outlet === nomeOutlet)
    }

    verFavoritos(){
      const estaAberto = this.isOutletAtivo('receitaFav');
      if(estaAberto){
          this.router.navigate([{ outlets: { receitaFav: null } }]); //fecha o componente
      } else {
          this.router.navigate([{ outlets: { receitaFav: ['favoritos'] } }]); //abre o componente
      }
    }

  }
