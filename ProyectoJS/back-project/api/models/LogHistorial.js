/**
 * LogHistorial.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fecha: {
      type: 'string'
    },
    accion: {
      type: 'string'
    },
    idUsuarioAreaSensor: {
      model: 'usuarioAreaSensor',
      required: false,
    }
  },

};

