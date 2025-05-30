import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from '../../receita.service';

@Component({
  selector: 'app-modo-preparo',
  imports: [],
  templateUrl: './modo-preparo.component.html',
  styleUrl: './modo-preparo.component.css'
})
export class ModoPreparoComponent {

  constructor(
    private route: ActivatedRoute,
    private receitaService: ReceitaService) {}

  verMais(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.receitaService.getURLReceita(id).subscribe(url => {
        if (url) {
          window.open(url, '_blank'); //'_blank' indica que a URL será aberta em uma nova aba do navegador.
        }
      })
    }
  }

}
