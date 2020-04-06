var mongoose = require('mongoose');
var Venta = require("../models/venta");

var ventasController = {};

ventasController.list = function(req, res){
    
    Venta.find({}).exec(function(err, ventas){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/index', {ventas: ventas} );
        
    });
    
};
/**++++++++++MOSTRAR DATOS+++++++++++++++ */
ventasController.show = function(req, res){
    Venta.findOne({_id: req.params.id}).exec(function(err, venta){
        if( err ){ console.log('Error: ', err); return; }
        
        res.send({venta: venta} );
    });
    
};
/**++++++++++CREAR DATOS+++++++++++++++ */
ventasController.create = function(req, res){
    res.render('../views/producto/create');
};

ventasController.save = function(req, res){
    var venta = new Venta( req.body );
    
    venta.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a product. :)");
        res.redirect("/products/show/"+venta._id);
        
    });
};
/**++++++++++ACTUALIZAR DATOS+++++++++++++++ */
ventasController.edit = function(req, res) {
    Venta.findOne({_id: req.params.id}).exec(function (err, venta) {
      if (err) { console.log("Error:", err); return; }
      
      res.render("../views/product/edit", {venta: venta});
      
    });
  };
  
  ventasController.update = function(req, res){
      Venta.findByIdAndUpdate( req.params.id, {$set: {
          nombre: req.body.nombre,
          cantidad: req.body.cantidad,
          precio: req.body.precio,
          fecha: req.body.fecha
      }}, { new: true },
      function( err, venta){
          if( err ){ 
              console.log('Error: ', err); 
              res.render('../views/product/edit', {venta: req.body} );
          }
          
          console.log( venta );
          
          res.redirect('/products/show/' + venta._id);
          
      });
  };
/**++++++++++ELIMINAR DATOS+++++++++++++++ */
ventasController.delete = function(req, res){
    
    Venta.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Product deleted!");
        res.redirect("/products");
    });
    
};
module.exports = ventasController;