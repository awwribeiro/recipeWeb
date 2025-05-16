import { Routes } from '@angular/router';
import { ReceitaCompletaComponent } from './componentes/receitas/receita-completa/receita-completa.component';
import { PaginaInicalComponent } from './componentes/receitas/pagina-inical/pagina-inical.component';
import { FavoritosComponent } from './componentes/receitas/favoritos/favoritos.component';
import { ListaIngredientesComponent } from './componentes/receitas/lista-ingredientes/lista-ingredientes.component';

export const routes: Routes = [
   {
     path: '',
     component: PaginaInicalComponent,
   },
   {
      path: 'receita/:id',
      component: ReceitaCompletaComponent,
      outlet: 'detalhes',
   },
   {
      path: 'favoritos',
      component: FavoritosComponent,
      outlet: 'receitaFav',
   },
   {
      path: 'lista-ingredientes',
      component: ListaIngredientesComponent,
      outlet: 'listaIngredientes',
   },
   {  path: '**',
      redirectTo: 'receitas'
   }
];

