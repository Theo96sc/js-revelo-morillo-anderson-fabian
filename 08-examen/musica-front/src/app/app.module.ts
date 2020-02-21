import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AutorModule} from './modulos/autor/autor.module';
import {RutaNoEncontradoComponent} from './componentes/ruta-no-encontrado/ruta-no-encontrado.component';
import {AutorRestService} from './Servicios/rest/autor-rest.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalCrearEditarAutorComponent} from './modulos/autor/modales/modal-crear-editar-autor/modal-crear-editar-autor.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule, InputTextModule} from 'primeng';
import {MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RutaNoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutorModule,
    TableModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [AutorRestService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
