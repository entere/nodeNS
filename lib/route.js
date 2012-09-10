var url = require('url');
var requestHandle = require('./requestHandle');

function route(request,response) {
	var handle = {};
	handle['/']     = requestHandle.start;
	handle['/put']  = requestHandle.put;
	handle['/get']  = requestHandle.get;
	handle['/post'] = requestHandle.post;

	var pathname = url.parse(request.url, true).pathname;

	if(typeof handle[pathname] === 'function') {
		handle[pathname](request,response);
	}
}

exports.route = route;
