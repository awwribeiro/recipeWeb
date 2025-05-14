import { Injectable, signal } from '@angular/core';
import { Receita } from './receita';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private favoritos = signal<Receita[]>([]); //array de objetos do tipo Receita

  getFavoritos() {return this.favoritos};

  adicionar(receita: Receita) {
    if (!this.favoritos().some(r => r.recipe_id === receita.recipe_id)) {
          this.favoritos.set([...this.favoritos(), receita]);
    }
  }

  remover(id: string){
    this.favoritos.set(this.favoritos().filter(r => r.recipe_id !== id));
  }

  alternar(receita: Receita){
    const lista = this.favoritos();
    const existe = lista.some(r => r.recipe_id === receita.recipe_id);

    if (existe) {this.remover(receita.recipe_id)} else {this.adicionar(receita)}
  }

}


