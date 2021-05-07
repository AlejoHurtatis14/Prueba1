var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Elige una de las opciones para mostrar la información',
    btnHombre: 'Hombre',
    btnMujer: 'Mujer',
    btnEdad0: 'Edad 0-20',
    btnEdad20: 'Edad 20-40',
    btnEdad40: 'Edad +40',
  });
});

module.exports = router;
