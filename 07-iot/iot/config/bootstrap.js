/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const moment = require('moment');
// importar Modulo Node Js (Usarlo)
// const modulo = require('moduloRaspberry');
const axios = require('axios');

const url = 'http://localhost:1338/';
// npm insal axios

// var sensor2 = 0;
// var sensor4 = 0;
// const Serialport = require('serialport');
// const Readline = Serialport.parsers.Readline;
// const port = new Serialport('/dev/ttyACM0', {
//   baudRate: 9600
// });
//
// const parser = port.pipe(new Readline({delimeter: '\r\n'}));
// parser.on('open', function () {
//   // console.log('conecction is opened');
// });
// parser.on('data', function (data) {
//   //console.log('datica', data);
//   valor = parseInt(data);
//   //console.log('valor', valor);
//   sensor2 = copiar(valor);
//   //sensor4 = copiar(valor);
// });
//
// const copiar = (numero) => {
//   return numero;
// };


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(3000, ()=> {
  console.log("Servidor escuchando en 3000");
});
//
// function onData(dato) {
//   io.sockets.emit('lectura', dato);
// }
//


// var app = require('express')();
// var http = require('http').createServer(app);
//
// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });
//
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

var jf = require('johnny-five');
var circuito = jf.Board();

var realizarCambios = false;

configuracionButton = {
  pin: 2,
  isPullup: true
};

var puertaCerrada = 1;

circuito.on('ready', enviarDatos);

function enviarDatos() {
  var button = new jf.Button(configuracionButton);
  var alarma = new jf.Led(12);


  io.on('connection', (socket) => {
    console.log('Alguien se conecto');
    //io.sockets.emit('test event', 'hola');
    socket.on('apagar', (msg)=>{
      alarma.off();
      console.log('mensajito', msg);
      io.sockets.emit('test event', 'Monitoreo');
      realizarCambios = true;
    });


  });

  //alarma.off();

  var led = new jf.Led(13);
  button.on('down', function (value) {
    led.on();
    puertaCerrada = 1;
    // io.sockets.emit('test event', 'hola');
  });

  button.on('up', function () {
    led.off();
    alarma.on();
    puertaCerrada = 0;
    io.sockets.emit('test event', 'alerta');
  });
  recibirInformacion(puertaCerrada);
}

function recibirInformacion(valor) {
  valor = puertaCerrada;
   // setTimeout(recibirInformacion, 1000);
  console.log(valor);
  return valor;
}

circuito.on('error', (error) => {
  console.log(error);
});

const moduloRaspberry = {
  // calcularProximidad: function () {
  //   return Math.random() * (10 - 0) + 0;
  // }

  calcularProximidad: function (puertaCerrada) {

    return {
      fecha: moment().format('YYYY-MM-DD'),
      hora: moment().format('LTS'),
      sensor: configuracionButton.pin,
    };

  }


};


module.exports.bootstrap = async function () {

  setInterval( // Ejecutar lo mismo cada dos segundos
    async () => {

      var compuerta = recibirInformacion(1);
      //   console.log('datos', compuerta);
      const historial = moduloRaspberry.calcularProximidad(compuerta);
      //  const historial = moduloRaspberry.calcularProximidad();
      console.log(historial);
      if (compuerta === 0) {

        const respuestaServidor = await axios
          .post('http://localhost:1338/loghistorial',
            historial);
            io.sockets.emit('ingreso', historial);

        console.log('respuesta Servidor', respuestaServidor);

      }

      // if (realizarCambios){
      //   const updateSensor =  await axios
      //   .put( url +'areaSensor/1', {
      //   estado: compuerta
      //   }, );
      //  // console.log('toca updater de', compuerta);
      //   realizarCambios = false;
      // }


    },
    1000 // cada 1 segundos
  );
};
// 1337 : iot
// 1338: backend
// POST http://localhost:1338/MonitoreoMovimiento {'valor': valor}
