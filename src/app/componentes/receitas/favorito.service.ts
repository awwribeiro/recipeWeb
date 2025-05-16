import { Injectable, signal } from '@angular/core';
import { Receita } from './receita';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private chaveStorage = 'receitasFavoritas'
  private favoritos = signal<Receita[]>(this.carregarDoStorage()); //array de objetos do tipo Receita

  getFavoritos() {return this.favoritos};

  private salvaNoStorage(favoritos: Receita[]) {
    localStorage.setItem(this.chaveStorage, JSON.stringify(favoritos));
  }

  private carregarDoStorage(): Receita[] {
    const dados = localStorage.getItem(this.chaveStorage);
    return dados ? JSON.parse(dados): [];
  }

  adicionar(receita: Receita) {
    //.some método de arrays que retorna true se pelo menos um item satisfaz a condição passada como função.
    // r representa cada item da array
    //set método do signal usado para atualizar seu valor.
    if (!this.favoritos().some(r => r.recipe_id === receita.recipe_id)) { //Verifica se a receita ainda não está na lista
          //this.favoritos.set([...this.favoritos(), receita]); //se não estiver, atualiza o signal com uma nova lista, clona os itens atuais e add a novo receita
          const atualizados = [...this.favoritos(), receita]; //operador spread (...) pega cada item individualmente da função favoritos() e add em receita [adicionar um novo item a um array existente sem alterar o original]
          this.favoritos.set(atualizados); //atualiza o signal favoritos com a nova lista
          this.salvaNoStorage(atualizados);
    }
  }

  remover(id: string){
    //.filter(...) – método de array que retorna um novo array com os itens que passam em uma condição.
    const atualizados = this.favoritos().filter(r => r.recipe_id !== id);
    this.favoritos.set(atualizados);
    this.salvaNoStorage(atualizados);
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


