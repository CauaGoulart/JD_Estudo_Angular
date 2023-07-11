import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
  public valor: number = 1;
  public texto: string = "Pare";

  ngOnInit(): void {
    setInterval(() => {
      this.valor += 1;
      if (this.valor == 1) {
        this.texto = "Pare"
      } else if(this.valor == 2) {
        this.texto = "Espere"
      } else if(this.valor == 3){
        this.texto = "Prossiga"
      }

     if(this.valor == 4){
      this.valor = 1;
      this.texto = "Pare"
     }

    }, 2500);
  }
}
