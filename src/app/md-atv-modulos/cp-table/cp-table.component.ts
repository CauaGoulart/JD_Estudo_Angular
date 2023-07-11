import { Component } from '@angular/core';
import { AtvServiceService } from '../services/atv-service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent {
  private medicamento = {
    nome: "",
    valor: 0
  }

  public nome:string ="";
  public valor:number = 0;

  constructor(private service: AtvServiceService) { }

  

  ngOnInit(): void {
    this.medicamento.nome = this.service.getNome();
    this.medicamento.valor = this.service.getValor();
    
  }

}
