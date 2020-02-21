import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaNoEncontradoComponent} from './componentes/ruta-no-encontrado/ruta-no-encontrado.component';


const routes: Routes = [
  {
    path: 'autor',
    loadChildren: () => import('./modulos/autor/autor.module').then(
      mod => mod.AutorModule
    )
  },
  {
    path: '',
    component: RutaNoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
