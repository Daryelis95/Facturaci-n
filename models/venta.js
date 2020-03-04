var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ventaSchema = new Schema({
   productos:[{
     nombre :String,
     cantidad: Number,
     precio: Number,
     fecha: Date
    }],
   clientes: [{ 
       nombre: String,
       apellido: String ,
       direccion :String ,
       telefono : Number
    }],
    metodo_pago:[{
        metodo:String,
        porcentaje:Number,
        monto_total:Number
    }]
});
var Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;


