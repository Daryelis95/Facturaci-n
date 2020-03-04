var express = require('express');
var routes = express.Router();
var Venta = require('./models/venta');
//Ruta Del Modelo De Venta
router.get('/models/venta', function(req, res, next) {

  Venta.find(function(err,Venta){
      
      if(err)
      res.send(500 , err.message);

      console.log('GET /Venta')
        res.status(200).jsonp(Venta);
    
  });
  
});

module.exports = routes;
