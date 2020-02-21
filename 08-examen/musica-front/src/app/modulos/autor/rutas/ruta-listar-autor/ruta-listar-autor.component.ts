import {Component, OnInit} from '@angular/core';
import {AutorRestService} from '../../../../Servicios/rest/autor-rest.service';
import {MatDialog} from '@angular/material';
import {ModalCrearEditarAutorComponent} from '../../modales/modal-crear-editar-autor/modal-crear-editar-autor.component';

@Component({
  selector: 'app-ruta-listar-autor',
  templateUrl: './ruta-listar-autor.component.html',
  styleUrls: ['./ruta-listar-autor.component.scss']
})
export class RutaListarAutorComponent implements OnInit {
  autores: any[] = [];

  columnas: any[] = [
    {field: 'nombre', header: 'Nombre'},
    {field: 'apellido', header: 'Apellido'},
    {field: 'fechaNacimiento', header: 'Fecha Nacimiento'},
    {field: 'genero', header: 'Genero'},
    {field: 'nacionalidad', header: 'Nacionalidad'},
    {field: 'id', header: 'Actividades'},

  ];

  constructor(private readonly _autorRestService: AutorRestService,
              private readonly _matDialog: MatDialog) {
  }

  ngOnInit() {
    // console.log(this._autorRestService.buscar(''));
    this.listarAutores();
  }

  listarAutores() {

    const autores$ = this._autorRestService.buscar('');
    autores$.subscribe(
      (data) => {
        console.log(data);
        this.autores = data;
      },
      (error) => {
        console.error('GRAN KAKA', error);
      }
    );
  }

  editar

  abrirModalCrearEditar( autor: any)  {
    const matDialogModalEditar = this._matDialog
      .open(
        ModalCrearEditarAutorComponent,
        {
          width: '500px',
          data: {
            autor,
          }
        }
      );
    const respuestaDialog$ = matDialogModalEditar
      .afterClosed();

    respuestaDialog$.subscribe(
      (datos) => {
        console.log('datos al modal', datos);

        if(datos){

        }
      },
      () => {

      }
    );
  }

  registrarAutor(autor: any) {
    const registrarAutor$ = this._autorRestService.registrar(autor);

    registrarAutor$.subscribe(
      (data) => {
        this.autores.push(data);
      },
      (error) => {
        console.error(error);
      }
    );
    this.listarAutores();

  }

  eliminar(autor) {


  }
}
