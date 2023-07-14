import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConversorComponent } from './conversor/conversor.component';
import { TablesConversorComponent } from './tables-conversor/tables-conversor.component';



@NgModule({
  declarations: [
    ConversorComponent,
    TablesConversorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ConversorComponent
  ]
})
export class AgrupadorModule { }
