var config = require('../config');
var http   = require('http');
var route  = require('./route');
function start() {
	function onRequest(request, response) {
		response.writeHead(200, {'Content-Type':'text/plain'});
		route.route(request, response);
	}
	
	http.createServer(onRequest).listen(config.serverinfo.port, config.serverinfo.host);
}


exports.start = start;
