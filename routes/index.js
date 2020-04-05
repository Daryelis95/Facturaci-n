var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Daryelis' });
});

//login
router.get('/login', function(req, res, next) {

  res.render('login');
});
///users
router.post('/users',function(req, res, next) {
  console.log("Contraseña:"+req.body.password);
  console.log("Email:"+req.body.email);
  res.send('Recibimos Tus Datos');
});

module.exports = router;
