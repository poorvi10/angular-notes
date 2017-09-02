// Exported routes to Node
// They respect a last declared hiearchy, so the ones defined at
// the bottom may override the ones at the top.
module.exports = function(app) {
	
	// Test route to with request and response
	app.get('/test', function(req, res) {
		
		// Writing to the Header of the response
		res.writeHead(200);
		
		// Writing to the body of the response using Writeable interface
		// Look it takes HTML!
		res.write('<h1>I\'m HTML!</h1>');
		// Must always end the Writeable stream 
		res.end();
	});

	app.get('/login', function(req, res) {
		// Displaying an already made view
		res.sendfile('public/views/login.html');
	});

	app.get('/register', function(req, res) {
		// Displaying an already made view
		res.sendfile('public/views/register.html');
	});
	
	// Wildcard route serving static html page
	app.get('*', function(req, res) {
		// Displaying an already made view
		res.sendfile('public/views/login.html');
	});



}