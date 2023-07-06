import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo-imc',
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.scss']
})
export class CalculoImcComponent {
  public peso: number = 0;
  public altura: number = 0;
  public imc: number = 0;
  public sexo: string = "";
  public classificacao: string = "";
  public classificacaoCor: string = "";

  public calculaImc() {
    this.imc = this.peso / (this.altura * this.altura);

    if(this.sexo == "Fem"){
      this.tabelaMulher();
    } else {
      this.tabelaHomen();
    }

  }

  public tabelaHomen() {
    
      if (this.imc > 40) {
        this.classificacao = "Obeso grau 3!";
        this.classificacaoCor = "red";
      } else if (this.imc >= 35) {
        this.classificacao = "Obeso grau 2";
        this.classificacaoCor = "red";
      } else if (this.imc >= 30) {
        this.classificacao = "Obeso grau 1";
        this.classificacaoCor = "yellow";
      } else if (this.imc >= 25) {
        this.classificacao = "Levemente Obeso";
        this.classificacaoCor = "orange";
      } else if (this.imc >= 20) {
        this.classificacao = "Normal";
        this.classificacaoCor = "green";
      } else {
        this.classificacao = "Magro";
        this.classificacaoCor = "red";
      }


    if(this.peso == 0 || this.altura == 0){
      this.classificacaoCor = "transparent";
    }
  }

  public tabelaMulher() {
    
    if (this.imc > 39) {
      this.classificacao = "Obeso grau 3!";
      this.classificacaoCor = "red";
    } else if (this.imc >= 34) {
      this.classificacao = "Obeso grau 2";
      this.classificacaoCor = "red";
    } else if (this.imc >= 29) {
      this.classificacao = "Obeso grau 1";
      this.classificacaoCor = "yellow";
    } else if (this.imc >= 24) {
      this.classificacao = "Levemente Obeso";
      this.classificacaoCor = "orange";
    } else if (this.imc >= 19) {
      this.classificacao = "Normal";
      this.classificacaoCor = "green";
    } else {
      this.classificacao = "Magro";
      this.classificacaoCor = "blue";
    }


  if(this.peso == 0 || this.altura == 0){
    this.classificacaoCor = "transparent";
  }
}

  public retornaImg():string{
    if (this.classificacao == "Obeso grau 3!") {
      return "https://static.vecteezy.com/system/resources/previews/012/042/295/original/danger-sign-icon-transparent-background-free-png.png";

    } else if (this.classificacao == "Obeso grau 2") {
      return "https://static.vecteezy.com/system/resources/previews/012/042/292/original/warning-sign-icon-transparent-background-free-png.png";

    } else if (this.classificacao == "Obeso grau 1") {
      return "https://static-00.iconduck.com/assets.00/face-with-cold-sweat-emoji-512x512-0w6qtryf.png";

    } else if (this.classificacao == "Levemente Obeso") {
      return "https://static-00.iconduck.com/assets.00/smiling-face-with-open-mouth-and-cold-sweat-emoji-512x512-w0ou1zci.png";

    } else if (this.classificacao == "Normal") {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/2048px-Green_check.svg.png";

    } else {
      return "https://imagepng.org/wp-content/uploads/2017/10/facebook-triste-emoji-icone-1.png";

    }
  }

}
