import { Component, OnInit } from '@angular/core';
import { AtvServiceService } from '../services/atv-service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent implements OnInit{

  public nome: string = "";
  public valor: number = 0;
  public medicamentos: any[] = [];

   constructor(private service: AtvServiceService) { }

   ngOnInit(): void {
    this.medicamentos = this.service.getMedicamentoSelecionado();
  }

  public addMed(nome: string, valor: number) {
    this.service.adicionaMedicamento(nome, valor);
    this.medicamentos = this.service.getMedicamentoSelecionado();
  }

  public parseValor(valor: string): number {
    return parseFloat(valor);
  }

}
