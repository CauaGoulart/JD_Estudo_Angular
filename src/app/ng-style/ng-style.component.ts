import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent {

  public largura : number = 100;
  public larguraStr : string = "100px"

  aumenta(){
    this.largura += 50;
    this.larguraStr = this.largura+"px"
  }

  diminui(){
    this.largura -= 50;
    this.larguraStr = this.largura+"px"
  }

}
