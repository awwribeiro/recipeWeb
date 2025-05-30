import { Component } from '@angular/core';
import { ReceitaCompletaComponent } from '../receita-completa.component';

@Component({
  selector: 'app-modo-preparo',
  imports: [],
  templateUrl: './modo-preparo.component.html',
  styleUrl: './modo-preparo.component.css'
})
export class ModoPreparoComponent {

  constructor(private receitaCompleta: ReceitaCompletaComponent) {}

  verMais(){
    const url = this.receitaCompleta.dados?.source_url; // ? Verifica se dados existe antes de acessar source_url
    if (url) {
      window.open(url, '_blank'); //'_blank' indica que a URL será aberta em uma nova aba do navegador.
    }
  }

}
