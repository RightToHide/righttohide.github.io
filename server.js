var static = require('node-static');

var fileServer = new static.Server('./public');

require('http').createServer(function (request, response) {
	request.addListener('end', function() {
		fileServer.serve(request, response);
	}).resume();
}).listen(8080, function() {
	console.log('Listening on port 8080');
});

