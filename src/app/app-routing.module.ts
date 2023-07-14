import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { PipesComponent } from './pipes/pipes.component';
import { CpPaiComponent } from './md-pai-filho/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiComponent2 } from './md-filho-pai/cp-pai/cp-pai.component';
import { CpAgrupadorComponent } from './md-service/cp-agrupador/cp-agrupador.component';
import { CpTelaComponent } from './md-atv-modulos/cp-tela/cp-tela.component';
import { ConversorComponent } from './agrupador/conversor/conversor.component';

const routes: Routes = [
  { path: "exemploBindings", component: ExemploBindingComponent},
  { path: "imc", component: CalculoImcComponent},
  { path: "ng-class", component: NgClassComponent},
  { path: "ng-style", component: NgStyleComponent},
  { path: "ng-if", component: NgIfComponent},
  { path: "ng-for", component: NgForComponent},
  { path: "ng-switch", component: NgSwitchComponent},
  { path: "pipes", component: PipesComponent},
  { path: "microondas", component: MicroondasComponent},
  { path: "pai-filho", component: CpPaiComponent},
  { path: "filho-pai", component: CpPaiComponent2},
  { path: "service", component: CpAgrupadorComponent},
  { path: "ng-model", component: CpTelaComponent},
  { path: "apicon", component: ConversorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
