import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FILAS } from './constantes/numero-filas-por-tabla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  url = 'http://localhost:1337';

  usuarios = [];
  FILAS = FILAS;

  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado= '';

  constructor(private readonly _httpClient: HttpClient) {
  }

  ngOnInit(): void {
    const urlUsuarios = this.url + '/usuario';
    const usuarios$ = this._httpClient.get(urlUsuarios);
    console.log(usuarios$);

    usuarios$
      .subscribe(
        (usuarios: any[]) => {
          console.log('Usuarios', usuarios);
          this.usuarios = usuarios;
        },
        (error) => {
          console.log({
            error: error,
            mensaje: 'Error consultando Usuarios'
          });
        }
      );
  }


  editar(usuario: any) {
    console.log('editando ', usuario);
  }

  eliminar(usuario: any) {
  console.log('eliminando', usuario);
  }

  usuarioFiltrado(){
    return this.usuarios.filter(
      
      (usuario)=>{      
       
        return usuario.apellido.includes(this.apellidoFiltrado) 
        && usuario.nombre.includes(this.nombreFiltrado)
        && usuario.correo.includes(this.correoFiltrado)
        && usuario.password.includes(this.passwordFiltrado);
        
        }
       
      
    );
  }
}
    