import { Component } from '@angular/core';
import { Receita } from '../../receita';

@Component({
  selector: 'app-modo-preparo',
  imports: [],
  templateUrl: './modo-preparo.component.html',
  styleUrl: './modo-preparo.component.css'
})
export class ModoPreparoComponent {
  dados!: Receita;

  verMais(){

  }

}
