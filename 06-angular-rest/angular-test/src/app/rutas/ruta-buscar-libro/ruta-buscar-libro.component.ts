import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LibroRestService} from 'src/app/Servicios/libro-rest.service';


@Component({
  selector: 'app-ruta-buscar-libro',
  templateUrl: './ruta-buscar-libro.component.html',
  styleUrls: ['./ruta-buscar-libro.component.scss']
})
export class RutaBuscarLibroComponent implements OnInit {
  libros = [];
  idUsuario: number;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _libroRestService: LibroRestService
  ) {
  }

  ngOnInit() {
    this.escucharParametros;
  }

  escucharParametros() {
    const parametrosPapa$ = this._activatedRoute.parent.params;
    parametrosPapa$
      .subscribe(
        (parametros: { idUsuario: string }) => {
          console.log('idUsuario- Componente papa',parametros); // idUsuario
          this.idUsuario = +parametros.idUsuario;
          this.buscarLibroPorIdUsuario(+parametros.idUsuario);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  buscarLibroPorIdUsuario(idUsuario: number) {
    const consulta = `idUsuario=${idUsuario}`;
    const libros$ = this._libroRestService
      .buscar(consulta);

    libros$
      .subscribe(
        (libros) => {
          console.log('libroskks= ', libros);
          this.libros = libros;
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
