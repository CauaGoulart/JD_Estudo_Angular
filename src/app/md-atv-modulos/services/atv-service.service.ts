import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtvServiceService {

  public emitEvent = new EventEmitter();

  private medicamento = {
    nome: "",
    valor: 0
  }

  public getNome(){
    return this.medicamento.nome;
    
  }

  public getValor(){
    return this.medicamento.valor;
    
  }
  

  public adicionaMedicamento(valor: string,numero:number){
    this.medicamento.nome = valor;
    this.medicamento.valor = numero;
  }

  constructor() { }
}
