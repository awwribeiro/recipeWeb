import { HttpClient } from '@angular/common/http'; //serviço do Angular responsável por fazer requisições HTTP
import { Injectable } from '@angular/core'; //necessário para declarar que essa classe pode ser injetada via Injeção de Dependência.
import { map, Observable } from 'rxjs';
//map: operador do RxJS usado para transformar os dados recebidos da API.
//Observable: tipo do RxJS que representa uma sequência de valores assíncronos.
import { Receita } from './receita';

@Injectable({
  providedIn: 'root'
})
// Define este service como injetável em toda a aplicação (singleton).

export class ReceitaService {
  private baseUrl = 'https://forkify-api.herokuapp.com/api';
  // URL base da API

  constructor(private http: HttpClient) {}
  // Injeta o HttpClient para fazer requisições HTTP.
  //HttpClient retorna Observable ​​de chamadas de métodos HTTP

  buscarReceitas(termo: string): Observable<Receita[]> {
    //função do tipo Observable para ouvir e responder a eventos de entrada do usuário
    const url = `${this.baseUrl}/search?q=${termo}`;
    // Monta a URL da API com o termo pesquisado.

    return this.http.get<any>(url).pipe(
      map(response => response.recipes)
      // Faz a requisição HTTP com http.get(), usa pipe() para manipular a resposta e map() para extrair apenas o array recipes do JSON retornado pela API.
    );
  }

  getDetalhesReceita(id: string) {
    return this.http.get<any>(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  }

  //configuraçao para exportar lista de ingredientes
  private ingredientesSelecionados: string[] = [];

  setIngredientesSelecionados(ingredientes: string[]) {
    this.ingredientesSelecionados = ingredientes;
  }

  getIngredientesSelecionados(): string[] {
    return this.ingredientesSelecionados;
  }

}

