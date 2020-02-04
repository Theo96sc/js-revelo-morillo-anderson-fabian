import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroRestService {

  // inyeccion de dependencias
  url = environment.url + '/libro';

  constructor(private readonly _httpClient: HttpClient) {

  }

  editar(id: number, datos): Observable<any> {
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );
  }

  buscar(busqueda: string): Observable<any> {
    let consulta = '';
    if (busqueda) {
      consulta = '?' + busqueda;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
  }

  eliminar(id: number): Observable<any> {
    const urlBuscar = this.url + '/' + id;
    return this._httpClient
      .delete(urlBuscar
      );
  }

  crear(usuario: any): Observable<any> {
    const urlCrear = this.url;
    return this._httpClient
      .post(
        urlCrear,
        usuario
      );
  }


}
