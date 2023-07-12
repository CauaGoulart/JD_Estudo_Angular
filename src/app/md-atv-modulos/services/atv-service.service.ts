import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtvServiceService {

  public emitEvent = new EventEmitter();

  private medicamentos: any[] = [];
  private medicamentoSelecionado: any = null;

  public adicionaMedicamento(nome: string, valor: number) {
    const medicamento = {
      nome: nome,
      valor: valor
    };
    this.medicamentos.push(medicamento);
  }

  public getMedicamentos() {
    return this.medicamentos;
  }

  public setMedicamentoSelecionado(medicamento: any) {
    this.medicamentoSelecionado = medicamento;
  }

  public getMedicamentoSelecionado() {
    return this.medicamentoSelecionado;
  }

  constructor() { }
}
