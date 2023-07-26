import { Component, Input } from '@angular/core';
import { Conversao } from '../model/conversao';

@Component({
  selector: 'app-tables-conversor',
  templateUrl: './tables-conversor.component.html',
  styleUrls: ['./tables-conversor.component.scss']
})
export class TablesConversorComponent {

  @Input() public valoresConvertido:any;
}
