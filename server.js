'use strict'
//VARIABLES
var titulo = "Josue y sus amigos"

var persona = {
	nombres: "Josue Gaston",
	apellidos: "Tavara Idrogo",
	edad: "21",
}

var amigos = [
	{
		nombres: "Carlos",
		apellidos: "Plasencia Prado",
		edad: "23",
	},
	{
		nombres: "Jeffri",
		apellidos: "Murrugarra LLerena",
		edad: "20",
	},
	{
		nombres: "Luis Carlos",
		apellidos: "Canso Díaz",
		edad: "24",
	},
]



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
	res.render('template.html', {title:titulo, person: persona, friends:amigos});
});

// INICIAR SERVIDOR

// Se corre el servidor en el puerto 8000
server.listen(8000, function() {
	console.log('Servidor esta escuchando en el puerto '+ 8000)
});