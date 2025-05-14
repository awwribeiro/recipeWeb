import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  imports: [CardComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

}
