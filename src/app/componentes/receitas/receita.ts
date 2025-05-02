// Define o modelo (interface) de uma receita, com todas as propriedades que a API retorna.

export interface Receita {
  publisher: string;
  ingredients: string[];
  title: string;
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;
  favorite: boolean;
}


//comunicação entre componentes
/*
1- Usuário digita "bolo" no BuscarReceitaComponent

2- O evento @Output() buscar = new EventEmitter<string>() dispara no AppComponent

3- O método aoBuscarReceita atualiza a propriedade termo

4- Esse termo é passado para ListaReceitasComponent via [termoBusca]

5- O ngOnChanges() de ListaReceitasComponent detecta mudança

6- Ele chama o ReceitaService com o novo termo e popula receitas

7- Cada receita é passada para ReceitaComponent via [dados]

8- O ReceitaComponent exibe a imagem, título e publisher
*/
