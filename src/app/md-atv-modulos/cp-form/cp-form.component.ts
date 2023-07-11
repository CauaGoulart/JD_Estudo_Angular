import { Component, OnInit } from '@angular/core';
import { AtvServiceService } from '../services/atv-service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {

  constructor(private service: AtvServiceService) { }

  public addMed(valor: string,numero: number) {
    return this.service.adicionaNome(valor,numero);
  }

}
