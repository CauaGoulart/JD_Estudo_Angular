import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

  listaDados: number[] = [];
  resultadoLancamento: number | null = null;

  public lancarDados() {
    const resultado = Math.floor(Math.random() * 20) + 1;
    this.listaDados.push(resultado);
    this.resultadoLancamento = resultado;
  }

  public removeDado(){
    this.listaDados.pop();
  }
}
