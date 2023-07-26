import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.css']
})
export class CpFormComponent implements OnInit{

  public nome: string = "";
  public preco: number = 0;

  constructor(private service: ServiceService) {}

  public addMedicamento() {
    const novoMedicamento = {nome: this.nome, preco: this.preco};
    this.service.adiciona(novoMedicamento);
    this.limparFormulario();
  }

  public limparFormulario() {
    this.nome = "";
    this.preco = 0;
  }

  ngOnInit(): void {
    this.service.medicamentoSelecionado.subscribe(medicamento => {
      this.nome = medicamento.nome;
      this.preco = medicamento.preco;
    });
  }
}
