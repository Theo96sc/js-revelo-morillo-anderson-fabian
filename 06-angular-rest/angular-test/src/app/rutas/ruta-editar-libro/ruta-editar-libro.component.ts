import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-editar-libro',
  templateUrl: './ruta-editar-libro.component.html',
  styleUrls: ['./ruta-editar-libro.component.scss']
})
export class RutaEditarLibroComponent implements OnInit {

  parametrosEditar;
  parametrosPapa;

  constructor(
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
   // this.escucharParametrosEdicion();
   this.escucharParametrosPapa();
  }

  escucharParametrosEdicion(){
    const parametros$ = this._activatedRoute.params;
    parametros$
    .subscribe(
      (parametros)=>{
        this.escucharParametrosEdicion = parametros.idLibro;
        console.log(parametros);
      },
      ()=>{
        
      }
    )
  }

  escucharParametrosPapa(){
    const parametros$ = this._activatedRoute.parent.params;
    parametros$
    .subscribe(
      (parametros)=>{
        this.parametrosPapa = parametros.idUsuario;
        this.escucharParametrosEdicion();
       // console.log('Paaremstros papa',parametros);
      },
      (error)=>{
        console.error(error);
      }
    )
  }

  cargarUsuarioYLibro(){

    // llamae al servidor con los parametros del papa y del hijo
    console.log(this.escucharParametrosPapa);
    console.log(this.parametrosPapa)
  }
}
