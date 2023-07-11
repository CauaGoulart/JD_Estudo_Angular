import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtvServiceService {

  public emitEvent = new EventEmitter();

  private medicamentos: any[] = [];

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

  constructor() { }
}
