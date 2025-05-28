import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Receita } from '../../receita';
import { ReceitaService } from '../../receita.service';
import { FavoritoService } from '../../favorito.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-apresentacao',
  imports: [CommonModule, RouterModule],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.css'
})
export class ApresentacaoComponent implements OnInit {
  dados!: Receita;

    constructor( private route: ActivatedRoute,
                 private router: Router,
                 private receitaService: ReceitaService,
                 private favoritoService: FavoritoService) {}

   alternarFavorito() {
    if(this.dados){
      this.favoritoService.alternar(this.dados);
    }
  }

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
        this.receitaService.setIngredientesSelecionados(receita.ingredients);  // Armazena apenas os ingredientes

       });
  }

}

