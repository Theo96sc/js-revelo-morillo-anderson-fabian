import {NgModule} from '@angular/core';
import {AutorRoutingModule} from './autor-routing.module';
import {RutaListarAutorComponent} from './rutas/ruta-listar-autor/ruta-listar-autor.component';
import {CrearEditarAutorComponent} from './componentes/crear-editar-autor/crear-editar-autor.component';
import {AutorRestService} from '../../Servicios/rest/autor-rest.service';
import {ModalCrearEditarAutorComponent} from './modales/modal-crear-editar-autor/modal-crear-editar-autor.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule, TableModule} from 'primeng';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    RutaListarAutorComponent,
    CrearEditarAutorComponent,
    ModalCrearEditarAutorComponent,
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
  ],
  providers: [
    AutorRestService
  ],
  entryComponents: [ModalCrearEditarAutorComponent]
})
export class AutorModule {
}
