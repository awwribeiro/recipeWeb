import { Routes } from '@angular/router';
import { ReceitaCompletaComponent } from './componentes/receitas/receita-completa/receita-completa.component';
import { AppComponent } from './app.component';
import { PaginaInicalComponent } from './componentes/receitas/pagina-inical/pagina-inical.component';

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
   {  path: '**',
      redirectTo: 'receitas'
   }
];

