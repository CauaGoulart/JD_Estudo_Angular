import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { PaiFilhoComponent } from './pai-filho/pai-filho.component';
import { FilhoPaiComponent } from './filho-pai/filho-pai.component';
import { ServicesComponent } from './services/services.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: "exemploBindings", component: ExemploBindingComponent},
  { path: "imc", component: CalculoImcComponent},
  { path: "ng-class", component: NgClassComponent},
  { path: "ng-style", component: NgStyleComponent},
  { path: "ng-model", component: NgModelComponent},
  { path: "ng-if", component: NgIfComponent},
  { path: "ng-for", component: NgForComponent},
  { path: "ng-switch", component: NgSwitchComponent},
  { path: "pipes", component: PipesComponent},
  { path: "microondas", component: MicroondasComponent},
  { path: "pai-filho", component: PaiFilhoComponent},
  { path: "filho-pai", component: FilhoPaiComponent},
  { path: "service", component: ServicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
