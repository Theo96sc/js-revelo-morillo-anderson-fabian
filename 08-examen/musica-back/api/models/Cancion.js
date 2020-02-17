/**
 * Cancion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    formato: {
      type: 'string'
    },
    album: {
      type: 'string'
    },
    duracion: {
      type: 'string'
    },
    idAutor: {
      model: 'autor',
      required: false
    },
    detallesCarrito : {
      collection: 'DetalleCarrito',
      via: 'idCancion'
    }

  },

};

