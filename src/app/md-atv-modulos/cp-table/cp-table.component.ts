import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.css']
})
export class CpTableComponent implements OnInit{

  public medicamentos: Array<any> = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.medicamentos = this.service.getLista();
  }

  public setMedicamentoSelecionado(medicamento: any) {
    this.service.setMedicamentoSelecionado(medicamento);
  }
}
