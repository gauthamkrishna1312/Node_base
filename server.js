const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
const url = require('node:url');

const server = http.createServer((req, res) => {

  let q = url.parse(req.url, true);

  if (req.url==='/') {
    fs.readFile('home.html', (err, data) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
    
  } else if (req.url==='/login') {
    fs.readFile('login.html', (err, data) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    });
  }else {
    fs.readFile('404.html', (err, data) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
      console.log(q.query);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console 