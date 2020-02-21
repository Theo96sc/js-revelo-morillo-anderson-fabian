import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;
  readonly uri: string = 'ws://localhost:3000';

  constructor() {
    this.socket = io(this.uri);
  }

  // constructor(private socket: Socket


  // ) {
  // }
  listen(eventName: string) {
    return new Observable(
      (subscriber) => {
        this.socket.on(eventName, (data) => {
          subscriber.next(data);
        });
      }
    );
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  enviarMensaje(data: any) {
    this.socket.emit('mandar-mensaje', data);
  }

  // escucharSala() {
  //     return this.socket
  //         .fromEvent('sala');
  //
  // }
  escucharSala() {
    return this.socket
      .fromEvent('lectura');

  }
}
