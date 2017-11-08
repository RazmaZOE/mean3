var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require("./config/database");

mongoose.connect(config.uri, { useMongoClient: true }, function(err){
    if(err){
        console.log("No se pudo conectar a la BD: " + err)
    }
    else{
        console.log("La clave generada por crypto es: " + config.secret); //para ver la clave del secret generado por crypto
        console.log("Conectado a la BD: " + config.db);
    }
});
mongoose.Promise = global.Promise;

app.get('*', function(req, res){
    res.send('hello world');
  });
  
  app.listen(3000, function(){
      console.log("Conectado al puerto 3000");
  });