import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent {

  public largura: number = 100;
  public larguraStr: string = "100px";
  public altura: number = 250;
  public alturaStr: string = "250px";

  aumentaCima() {
    this.altura -= 50;
    this.alturaStr = this.altura + "px";
  }

  diminuiBaixo() {
    this.altura += 50;
    this.alturaStr = this.altura + "px";
  }

  aumentaDireita() {
    this.largura += 50;
    this.larguraStr = this.largura + "px";
  }

  diminuiEsquerda() {
    this.largura -= 50;
    this.larguraStr = this.largura + "px";
  }
}

