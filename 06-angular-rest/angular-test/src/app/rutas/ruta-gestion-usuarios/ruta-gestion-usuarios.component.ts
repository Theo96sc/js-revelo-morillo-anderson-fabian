import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FILAS} from '../../constantes/numero-filas-por-tabla';
import {MatDialog} from '@angular/material/dialog';
import {ModalEditarUsuarioComponent} from '../../modales/modal-editar-usuario/modal-editar-usuario.component';
import {UsuarioRestService} from '../../Servicios/usuario-rest.service';
import {identifierModuleUrl} from '@angular/compiler';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  title = 'angular-test';
  url = 'http://localhost:1337';

  usuarios = [];
  FILAS = FILAS;

  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';
  busquedaUsuario = '';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _usuarioRestService: UsuarioRestService) {
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
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {
          width: '500px',
          data: {
            usuario,
          }
        }
      );
    const respuestaDialog$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialog$
      .subscribe(
        (datos) => { // try
          console.log('datos', datos);

          if (datos) {
            this.editarUsuarioHTTP(usuario.id, datos);
          } else {

          }
        },
        (error) => { // catch
          console.log('error', error);
        }
      );
  }

  editarUsuarioHTTP(id: number, datos) {
    const usuarioEditado$ = this._usuarioRestService
      .editar(id, datos);

    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => {
          console.log(usuarioEditado);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id == id;
              }
            );

          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].apellido = datos.apellido;
          this.usuarios[indice].correo = datos.correo;
          this.usuarios[indice].password = datos.password;
        },
        (error) => {
          console.log(error);
        }
      );

  }


  eliminar(usuario: any) {
    const eliminar$ = this._usuarioRestService
      .eliminar(usuario.id);

    eliminar$
      .subscribe(
        (usuarioEliminado) => {
          console.log(usuarioEliminado);

          const indice = this.usuarios
            .findIndex(
              (usuarioAbuscar) => {
                return usuarioAbuscar.id === usuario.id;
              }
            );
          this.usuarios.splice(indice, 1);
        },
        (error) => {

          console.error(error);
        });
    console.log('eliminando', usuario);
  }

  buscarUsuarioPorNombre() {
    const busqueda$ = this._usuarioRestService
      .buscar(this.busquedaUsuario);

    busqueda$
      .subscribe(
        (usuarios) => {
          this.usuarios = usuarios;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  usuarioFiltrado() {
    return this.usuarios.filter(
      (usuario) => {

        return usuario.apellido.includes(this.apellidoFiltrado)
          && usuario.nombre.includes(this.nombreFiltrado)
          && usuario.correo.includes(this.correoFiltrado)
          && usuario.password.includes(this.passwordFiltrado);

      }
    );
  }

  crearUsuarioHTTP(usuario: any) {
    const crear$ = this._usuarioRestService
      .crear(usuario);

    crear$
      .subscribe(
        (usuarioCreado) => {
          console.log('usuario a creado ', usuarioCreado);
        },
        (error) => {
          console.error('error', error);
        }
      );
  }

  crear(usuario: any) {
    console.log('creando', usuario);
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {
          width: '500px'
        }
      );
    const respuestaDialog$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialog$
      .subscribe(
        (datos) => {
          console.log('datos', datos);

          if (datos) {
            this.crearUsuarioHTTP(datos);
            this.usuarios.unshift(datos);

          }
        },
        (error) => {
          console.error('error', error);
        }
      );

  }


}
