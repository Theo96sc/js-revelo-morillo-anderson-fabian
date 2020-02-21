import {Component, OnInit} from '@angular/core';
import {LogHistorialRestService} from '../../../Servicios/LogHistorial.rest.service';
import {WebsocketService} from '../../../Servicios/websocket.service';
import {AreaSensoresRestService} from '../../../Servicios/areaSensores.rest.service';

@Component({
  selector: 'app-listar-log-historial',
  templateUrl: './listar-log-historial.component.html',
  styleUrls: ['./listar-log-historial.component.scss']
})
export class ListarLogHistorialComponent implements OnInit {
  busquedaHistorial: any;

  historiales = [];
  FILAS = 3;
  sensorFiltrado = '';
  fechaFiltrado = '';
  horaFiltrado = '';
  historial: any;

  alerta : string;



  constructor(private readonly _logHistorialRestService: LogHistorialRestService,
  private readonly _socket: WebsocketService,
              private readonly _areaSensorRestService: AreaSensoresRestService
  ) {
  }

  ngOnInit() {

    this.listarHistorial();
    this._socket.listen("test event")
      .subscribe(
        (data)=>{
          this.alerta = data.toString();
          console.log(data);
        }
      );

    this._socket.listen("ingreso")
      .subscribe(
        (data)=>{
         // this.alerta = data.toString();
          console.log('EUU', data);
          this.listarHistorial();
        }
      );
    // this._socket.escucharSala().subscribe(
    //   (res) => {
    //     console.log('socket, ', res);
    //     // this.listarHistorial();
    //
    //   }
    // );

  }

  listarHistorial(){


    const urlLogHistorial$ = this._logHistorialRestService.buscar('');
    urlLogHistorial$.subscribe(
      (data) => {
        console.log('kaka', data);
        this.historiales = data;
      },
      (err) => {
        console.log({
          error : err,
          mensaje : 'Error consutando LogHistorial'
        });
      }
    );

  }

  buscarHistorialPorNombre() {

  }

  logFiltrado() {
return this.historiales;
  }

  apagar() {
    console.log("Apagando");
    this._socket.emit('apagar','Apagando alarma');
    this._areaSensorRestService.editar(1,{
      estado: 0
    })
  }
}
