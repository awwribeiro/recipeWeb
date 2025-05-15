import { Injectable, signal } from '@angular/core';
import { Receita } from './receita';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private favoritos = signal<Receita[]>([]); //array de objetos do tipo Receita

  getFavoritos() {return this.favoritos};

  adicionar(receita: Receita) {
    //.some método de arrays que retorna true se pelo menos um item satisfaz a condição passada como função.
    // r representa cada item da array
    //set método do signal usado para atualizar seu valor.
    if (!this.favoritos().some(r => r.recipe_id === receita.recipe_id)) { //Verifica se a receita ainda não está na lista
          this.favoritos.set([...this.favoritos(), receita]); //se não estiver, atualiza o signal com uma nova lista, clona os itens atuais e add a novo receita
    }
  }

  remover(id: string){
    //.filter(...) – método de array que retorna um novo array com os itens que passam em uma condição.
    this.favoritos.set(this.favoritos().filter(r => r.recipe_id !== id));
  }

  alternar(receita: Receita) {
    const ehFavorita = this.favoritos().some(r => r.recipe_id === receita.recipe_id);
      if(ehFavorita){
        this.remover(receita.recipe_id);
        receita.favorite = false;
      } else {
        this.adicionar(receita);
        receita.favorite = true;
      }
  }


}


