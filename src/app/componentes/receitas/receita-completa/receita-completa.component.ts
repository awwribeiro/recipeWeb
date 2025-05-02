import { Receita } from '../receita';
import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from '../receita.service';
import { Subscribable, Subscription, switchMap } from 'rxjs';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-receita-completa',
  imports: [CommonModule],
  templateUrl: './receita-completa.component.html',
  styleUrl: './receita-completa.component.css'
})
export class ReceitaCompletaComponent implements OnInit {
  dados!: Receita;

    constructor(
      private route: ActivatedRoute,
      private receitaService: ReceitaService) {}

    ngOnInit(): void {
      this.route.paramMap.pipe(switchMap(params =>{
        const id = params.get('id');
        return id ? this.receitaService.getDetalhesReceita(id) : [];
      })).subscribe(response => {this.dados = response.recipe;})}

    alternarFavorito() {
      if(this.dados){
        this.dados.favorite = !this.dados.favorite
      }
    }
}

