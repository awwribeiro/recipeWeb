import { NgIf } from '@angular/common';
import { Receita } from './../receita';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-receita',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css'
})
export class ReceitaComponent {
  @Input() dados!: Receita;
  // Recebe os dados de uma receita como input do componente pai.

  constructor(private router: Router, private route: ActivatedRoute) {}

  verDetalhes() {
    this.router.navigate(
      [{ outlets:
          { detalhes: ['receita', this.dados.recipe_id]
          }
      }]
    );
  }

}
