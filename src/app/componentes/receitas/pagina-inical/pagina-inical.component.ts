import { Component } from '@angular/core';
import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';
import { BuscarReceitaComponent } from '../buscar-receita/buscar-receita.component';
import { ListaReceitasComponent } from '../lista-receitas/lista-receitas.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-inical',
  imports: [BuscarReceitaComponent,
            ListaReceitasComponent,
            CommonModule,
            RouterOutlet],
  templateUrl: './pagina-inical.component.html',
  styleUrl: './pagina-inical.component.css'
})
export class PaginaInicalComponent {

  termoBusca: string = '';
  receitas: Receita[] = [];

  constructor(private receitaService: ReceitaService) {}

  aoBuscarReceita(termo: string) {
    this.termoBusca = termo;
    if (this.termoBusca) {
      this.receitaService.buscarReceitas(this.termoBusca).subscribe(receitas => {
        this.receitas = receitas;
      });
    }
  }

  mostrarLista = true;
  mostrarReceitaCompleta = true;
  mostrarFavoritos = true;
  mostrarListaIngredientes = true;

get layoutClasse() {
  const visiveis = [
    this.mostrarLista,
    this.mostrarReceitaCompleta,
    this.mostrarFavoritos
  ].filter(v => v).length;

  if (visiveis === 1) {
    if (this.mostrarLista) return 'layout-somente-lista';
    if (this.mostrarReceitaCompleta) return 'layout-somente-completa';
    if (this.mostrarFavoritos) return 'layout-somente-favoritos';
  }

  if (visiveis === 2) {
    return 'layout-duplo';
  }

  if (visiveis === 3) {
    return 'layout-triplo';
  }

  return '';
}



}


