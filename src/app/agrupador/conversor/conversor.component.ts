import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent {

   constructor(private http: HttpClient) {}
  
  public valor: number = 0;

  public valoresConvertido: { dolar: number, euro: number, pesoArgentino: number } = {
    dolar: 0,
    euro: 0,
    pesoArgentino: 0
  };

  getData(): Observable<any> {
    let url = `https://api.hgbrasil.com/finance?format=json-cors&key=bcdcdd34`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.results.currencies;
      })
    );
  }
  

  public buscarValor() {
    this.getData().subscribe((cotacoes) => {
      const realParaDolar = (this.valor / cotacoes.USD.buy).toFixed(2);
      const realParaEuro = (this.valor / cotacoes.EUR.buy).toFixed(2);
      const realParaPesoArgentino = (this.valor / cotacoes.ARS.buy).toFixed(2);
  
      this.valoresConvertido = {
        dolar: Number(realParaDolar),
        euro: Number(realParaEuro),
        pesoArgentino: Number(realParaPesoArgentino)
      };
    });
  }
  
  

//bcdcdd34
}
