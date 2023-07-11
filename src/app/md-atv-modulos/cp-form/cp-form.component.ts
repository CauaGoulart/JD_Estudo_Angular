import { Component, OnInit } from '@angular/core';
import { AtvServiceService } from '../services/atv-service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {

  constructor(private service: AtvServiceService) { }
  public nome: string = "";
  public valor: number = 0;

  public addMed(nome: string, valor: number) {
    this.service.adicionaMedicamento(nome, valor);
  }

  public parseValor(valor: string): number {
    return parseFloat(valor);
  }

}
