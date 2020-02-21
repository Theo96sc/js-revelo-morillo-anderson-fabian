import { Component, OnInit } from '@angular/core';
import {LogHistorialRestService} from '../../../Servicios/LogHistorial.rest.service';
import {WebsocketService} from '../../../Servicios/websocket.service';
import {AreaSensoresRestService} from '../../../Servicios/areaSensores.rest.service';

@Component({
  selector: 'app-listar-area-sensor',
  templateUrl: './listar-area-sensor.component.html',
  styleUrls: ['./listar-area-sensor.component.scss']
})
export class ListarAreaSensorComponent implements OnInit {



  areaSensores = [];
  FILAS = 3;



  constructor(private readonly _areaSensorRestService: AreaSensoresRestService,
              private readonly _socket: WebsocketService
  ) {
  }

  ngOnInit() {


this.listarSensores();
this.traerDatoEstadoPuerta();

  }

  listarSensores(){


    const urlLogHistorial$ = this._areaSensorRestService.buscar('');
    urlLogHistorial$.subscribe(
      (data) => {

        this.areaSensores = data;
      },
      (err) => {
        console.log({
          error : err,
          mensaje : 'Error consutando LogHistorial'
        });
      }
    );

  }


  AreaSensorFiltrado() {
    return this.areaSensores;
  }

  apagar() {
    console.log("Apgando");
    this._socket.emit('apagar','Apagando alarma')
  }

  traerDatoEstadoPuerta() {

   let hubocambio = false;
   const respuetaSocket$=  this._socket.listen("test event");

   if(respuetaSocket$){
     console.log("se prendio");
     hubocambio = true
   }else{
     console.log("Seapago");
     hubocambio = false;
   }
    return hubocambio;
  }


}
