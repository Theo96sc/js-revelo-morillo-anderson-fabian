import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaListarAutorComponent} from './rutas/ruta-listar-autor/ruta-listar-autor.component';

const routes: Routes = [
  {
    path: 'listar-autor',
    component: RutaListarAutorComponent
  },
  {
    path: '',
    redirectTo: 'listar-autor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
