import { Component, computed, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ListaReceitasComponent } from '../lista-receitas/lista-receitas.component';
import { CommonModule } from '@angular/common';
import { FavoritoService } from '../favorito.service';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CardComponent, ListaReceitasComponent, CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

 constructor(public favoritoService: FavoritoService) {}

 get receitasFavoritas() {return this.favoritoService.getFavoritos()}

}

