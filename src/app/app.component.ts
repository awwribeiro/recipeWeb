import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// Importa a classe base Component do Angular.

import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { PaginaInicalComponent } from './componentes/receitas/pagina-inical/pagina-inical.component';
// Importa os componentes utilizados no template da aplicação.

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent,
            RodapeComponent,
            PaginaInicalComponent,
            CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Define o componente raiz da aplicação com seu seletor, HTML e CSS associados e os imports dos componentes standalone.

export class AppComponent {
  title = 'RecipeWebSite';
}

