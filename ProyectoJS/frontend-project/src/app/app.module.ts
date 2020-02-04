import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MODULOS_ANDERSON} from './constantes/modulos/modulos';
import {MODULOS_THEO} from './constantes/modulos/modulosT';
import {SERVICIOS_ANDERSON} from './constantes/servicios/serviciosA';
import {SERVICIOS_THEO} from './constantes/servicios/serviciosT';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...MODULOS_ANDERSON,
    ...MODULOS_THEO
  ],
  providers: [
    ...SERVICIOS_ANDERSON,
    ...SERVICIOS_THEO,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
