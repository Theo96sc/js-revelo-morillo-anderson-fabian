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

// importar Modulo Node Js (Usarlo)
// const modulo = require('moduloRaspberry');

const axios = require('axios');
// npm insal axios
const moduloRaspberry = {
  calcularProximidad: function () {
    return Math.random() * (10 - 0) + 0;
  }
};
module.exports.bootstrap = async function () {

  setInterval( // Ejecutar lo mismo cada dos segundos
    async () => {
      const valor = moduloRaspberry.calcularProximidad();
    //  console.log('valor Proximidad: ', valor);
      const respuestaServidor = await axios
        .post('http://localhost:1338/MonitoreoMovimiento',
          {
            valor: valor
          });
      console.log('respuesta Servidor', respuestaServidor);
    },
    2000 // cada 2 segundos
  );
};
// 1337 : iot
// 1338: backend
// POST http://localhost:1338/MonitoreoMovimiento {'valor': valor}
