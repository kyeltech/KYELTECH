var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
  response.writeHead(200);
  fs.writeFile('./form.html', null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write('fiole not found');
    } else {
      response.write(data);
    }
    response.end();
  });
}
http.createServer(onRequest).listen(8080);