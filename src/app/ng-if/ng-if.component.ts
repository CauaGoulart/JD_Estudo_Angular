import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {

  usuarioLogado:boolean = false;
  usuarioDados:boolean = false;

  public clickLogar(){
    this.usuarioLogado = !this.usuarioLogado;
  }

  public clickDados(){
    this.usuarioDados = !this.usuarioDados;
  }

}
