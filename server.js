const http = require('http');
const hostname = '127.0.0.1';

const port = 3000;
const server = http.createServer(function(req, res) {

 res.statusCode = 200;

 res.setHeader('Content-Type', 'text/plain');

 res.end('Hello World\n');

});server.listen(port, hostname, function() {

 console.log('Server running at http://'+ hostname + ':' + port + '/');

});
// Now let me explain what is going on

// The first line const http = require('http');

// Imports Node.js ModuleModules are just reusable codes that You and I can create....

// So the Node.js developers create the http module for use to interact with HTTP (servers of course)

// The second line create a variable and assign a web address to it, same with the third assign Port number to it

// We have the next `const server http.createServer(function (req, res) { .............. `

// That line simply use our http module we imported earlier to create a new server and pass on the response data to it...In our case we pass on status Code 200, Content Type = Plain text and then we render the text with the res.end method

// After setting up this server with the information, we simply create the server and listen to incoming request to the port and address we provide...If it's a success, we log the status
