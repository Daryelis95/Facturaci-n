var express = require('express');
var router = express.Router();
var ventasController = require('../controllers/VentasController.js');
//var Venta = require('./mo');
//Ruta Del Modelo De Venta
router.get('/', function(err, req, res, next) {

  Venta.find(function(err,Venta){
      
      if(err)
      res.send(500 , err.message);

      console.log('GET /Venta')
        res.status(200).jsonp(Venta);
    
  });
  
});

router.get('/producto/mostrar/:id', ventasController.show);
router.post('/crear', ventasController.create);

module.exports = router;
