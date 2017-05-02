var http = require("http");
var path = require('path');
var fs = require("fs");
var tools = require('./ObtainFileNames');
var server = http.createServer();

var io = require('socket.io')
var socketStream = require("socket.io-stream");

server.listen(3000);
var ss = io.listen(server);

ss.on('connection', function(socket) {
	console.log("Connected");
	
	

	socketStream(socket).on('sendFile', function(stream, data) {
		console.log("here");
		var song = data.name;
		console.log(song);

		var file = [];
		file = tools.find("/FYP/Server/Music", song);  
		var filename = file[0] + "/" + file[1];
		fs.createReadStream(filename).pipe(stream);

	});
	
	ss.on("disconnect", function(){
		console.log("Client disconnected.");
		r
	});

});












/*var http = require('http');
var fs = require('fs');

var server = fs.createReadStream(__dirname + "/test.txt", "utf8");
var writeStream = fs.createWriteStream(__dirname + "/test2.txt");
server.on("data", function(chunk){
	
	console.log("data received");
	writeStream.write(chunk);
	
});

*/