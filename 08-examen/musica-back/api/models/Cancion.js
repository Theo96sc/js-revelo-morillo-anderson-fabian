/**
 * Cancion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
      type: 'string'
    },
    precio: {
      type: 'number'
    },
    genero: {
      type:'string'
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

