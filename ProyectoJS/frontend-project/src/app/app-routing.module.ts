import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RUTAS_ANDERSON} from './constantes/rutas/rutas-anderson';
import {RUTAS_THEO} from './constantes/rutas/rutas-theo';


const routes: Routes = [
  ...RUTAS_ANDERSON,
  ...RUTAS_THEO,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
