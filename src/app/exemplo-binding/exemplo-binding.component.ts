import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {
  public n1: number = 10;
  public n2: number = 15;
  public texto: string = "";

  public retornaImg():string{
    if(this.n1 > 0){
    return "https://www.pngall.com/wp-content/uploads/5/Emoticon-PNG.png";
    }
    else{
      return "https://imagepng.org/wp-content/uploads/2017/10/facebook-triste-emoji-icone-1.png";
    }
  }


  public alteraValores() {
    if (this.n1 == 10) {
      this.n1 = 20;
      this.n2 = 25;
    } else {
      this.n1 = 10
      this.n2 = 15
    }
  }

  public diminuiN1(){
    this.n1--;
  }

}
