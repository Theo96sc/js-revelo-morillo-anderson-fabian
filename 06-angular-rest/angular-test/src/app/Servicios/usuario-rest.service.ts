import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {

  //inyeccion de dependencias
  url = environment.url + '/usuario';
  constructor(private readonly _httpClient: HttpClient) {

  }

  editar(id: number, datos): Observable<any>{
    const urlEditar = this.url + '/' +id;
    return this._httpClient
    .put(
      urlEditar,
      datos
    );
  }

}
