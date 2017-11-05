'use strict'
//VARIABLES




// REQUERIMIENTO DE MODULOS

var express =  require('express');
var swig = require('swig');
//CONFIGURACIONES

// Creación del servidor web con express
var server = express();

// Integracion del motor de templates swig
server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

// PETICIONES

// Cuando exista una petición en el servidor  
server.get('/',function(req,res){
	res.render('pagina.html');
});

// INICIAR SERVIDOR

// Se corre el servidor en el puerto 8000
server.listen(8000, function() {
	console.log('Servidor esta escuchando en el puerto '+ 8000)
});