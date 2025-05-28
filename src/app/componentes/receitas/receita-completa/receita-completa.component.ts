import { Receita } from './../receita';
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReceitaService } from '../receita.service';
import { CardComponent } from '../card/card.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { IngredientesComponent } from "./ingredientes/ingredientes.component";

@Component({
  selector: 'app-receita-completa',
  imports: [CommonModule, CardComponent, RouterModule, ApresentacaoComponent, IngredientesComponent],
  templateUrl: './receita-completa.component.html',
  styleUrl: './receita-completa.component.css'
})
export class ReceitaCompletaComponent {
  dados!: Receita;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private receitaService: ReceitaService) {}


}

