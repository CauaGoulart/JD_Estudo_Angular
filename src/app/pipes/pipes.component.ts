import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  public data: Date = new Date();
  public nome: string = "Fulano de Tal";
  public valor: number = 12345.67;
  public porcentagem : number = 0.50
  public palavra: string = "";
}
