var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
  console.log('client request URL: ', request.url);
  if (request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/cats') {
    fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/cars/new') {
    fs.readFile('./views/cars_new.html', 'utf8', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/images/1.jpg') {
    fs.readFile('./images/1.jpg', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/images/2.jpg') {
    fs.readFile('./images/2.jpg', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/images/3.jpg') {
    fs.readFile('./images/3.jpg', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/images/1.jpg') {
    fs.readFile('./images/1.jpg', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/images/4.jpg') {
    fs.readFile('./images/4.jpg', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/images/5.jpg') {
    fs.readFile('./images/5.jpg', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/images/6.jpg') {
    fs.readFile('./images/6.jpg', function (errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      response.write(contents);
      response.end();
    });
  } else {
    response.writeHead(404);
    response.end('File not found!!!');
  }
});
server.listen(7077);
console.log("Running in localhost at port 6789");