import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovemdevTitleComponent } from './jovemdev-title/jovemdev-title.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { FormsModule } from '@angular/forms';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipesComponent } from './pipes/pipes.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { FilhoPaiComponent } from './filho-pai/filho-pai.component';
import { MenuComponent } from './menu/menu.component';
import { InvertePipe } from './inverte.pipe';
import { MdPaiFilhoModule } from './md-pai-filho/md-pai-filho.module';
import { MdFilhoPaiModule } from './md-filho-pai/md-filho-pai.module';
import { MdServiceModule } from './md-service/md-service.module';
import { MdAtvModulosModule } from './md-atv-modulos/md-atv-modulos.module';

@NgModule({
  declarations: [
    AppComponent,
    JovemdevTitleComponent,
    ExemploBindingComponent,
    CalculoImcComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    PipesComponent,
    MicroondasComponent,
    FilhoPaiComponent,
    MenuComponent,
    InvertePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MdPaiFilhoModule,
    MdFilhoPaiModule,
    MdServiceModule,
    MdAtvModulosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
