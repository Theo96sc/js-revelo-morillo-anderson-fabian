import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AutorRestService {
  url: string = environment.url + '/autor';

  constructor(private readonly _httpClient: HttpClient) {
  }

  buscar(busqueda: string): Observable<any> {

    let consulta = '';
    if (busqueda) {
      consulta = '?nombre=' + busqueda;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
  }

  registrar(autor: any) {
    const urlRegistrar = this.url;
    return this._httpClient
      .post(
        urlRegistrar,
        autor
      );
  }
}
