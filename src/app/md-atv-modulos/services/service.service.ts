import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public medicamentoSelecionado = new EventEmitter<any>();
  private medicamentos: Array<any> = [];

  constructor() {}

  public getLista() {
    return this.medicamentos;
  }

  public adiciona(medicamento: any) {
    this.medicamentos.push(medicamento);
  }

  public setMedicamentoSelecionado(medicamento: any) {
    this.medicamentoSelecionado.emit(medicamento);
  }
}
