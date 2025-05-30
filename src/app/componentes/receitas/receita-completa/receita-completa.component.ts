import { Receita } from './../receita';
import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReceitaService } from '../receita.service';
import { CardComponent } from '../card/card.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { IngredientesComponent } from "./ingredientes/ingredientes.component";
import { ModoPreparoComponent } from "./modo-preparo/modo-preparo.component";

@Component({
  selector: 'app-receita-completa',
  imports: [CommonModule,
            CardComponent,
            RouterModule,
            ApresentacaoComponent,
            IngredientesComponent,
            ModoPreparoComponent],
  templateUrl: './receita-completa.component.html',
  styleUrl: './receita-completa.component.css'
})
export class ReceitaCompletaComponent implements OnInit{
  dados!: Receita;

  constructor(
    private route: ActivatedRoute,
    private receitaService: ReceitaService) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.receitaService.getDetalhesReceita(id).subscribe(resposta => {
        this.dados = resposta.recipe;
        this.receitaService.setIngredientesSelecionados(this.dados.ingredients);
        this.receitaService.setNomeReceita(this.dados.title);

      });
    }
  }


}

