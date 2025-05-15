import { Receita } from './../receita';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from '../receita.service';
import { switchMap } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { FavoritoService } from '../favorito.service';

@Component({
  selector: 'app-receita-completa',
  imports: [CommonModule, CardComponent],
  templateUrl: './receita-completa.component.html',
  styleUrl: './receita-completa.component.css'
})
export class ReceitaCompletaComponent implements OnInit {
  dados!: Receita;

    constructor(
      private route: ActivatedRoute,
      private receitaService: ReceitaService,
      private favoritoService: FavoritoService) {}

    ngOnInit(): void {
  this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      return id ? this.receitaService.getDetalhesReceita(id) : [];
    })
  ).subscribe(response => {
    const receita = response.recipe;
    receita.favorite = this.favoritoService.getFavoritos()
      ().some(r => r.recipe_id === receita.recipe_id); // verifica se já é favorita

    this.dados = receita;
  });
}


    alternarFavorito() {
      if(this.dados){
        this.favoritoService.alternar(this.dados);
      }
    }

}

