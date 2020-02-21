import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ListarLogHistorialComponent} from './Modulos/logHistorial/listar-log-historial/listar-log-historial.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule, InputTextModule, TableModule} from 'primeng';
import {LogHistorialRestService} from './Servicios/LogHistorial.rest.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {WebsocketService} from './Servicios/websocket.service';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import { ListarAreaSensorComponent } from './Modulos/AreaSensor/listar-area-sensor/listar-area-sensor.component';
import {AreaSensoresRestService} from './Servicios/areaSensores.rest.service';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ListarLogHistorialComponent,
    ListarAreaSensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    MatDialogModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    LogHistorialRestService,
    AreaSensoresRestService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
