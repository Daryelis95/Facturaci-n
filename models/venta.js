var mongoose = require('mongoose');

var cliente = new mongoose.Schema({
   nombre :'string',
   apellido: 'string',
   direccion: 'string',
   telefono: 'string'
});

var Venta = mongoose.model('Venta', cliente);