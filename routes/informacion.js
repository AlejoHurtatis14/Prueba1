var express = require('express');
const request = require("request");
var router = express.Router();

router.get('/datos/*', async function(req, res, next) {
  var informacion;
  await request('https://www.datos.gov.co/resource/gt2j-8ykr.json',(err,response,body)=>{
    if (!err){
      informacion = JSON.parse(body);
      if (req.params.llave == 'sexo') {
        informacion = informacion.filter(it => it[req.params.llave] == req.params.valor);
      } else {
        informacion = informacion.filter(it => +it[req.params.llave] >= req.params.valor && +it[req.params.llave] < req.params.edad);
      }
      res.send(informacion);
    } else {
      res.send([]);
    }
  });
});

module.exports = router;
