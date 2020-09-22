const http = require('http');

// Create an HTTP tunneling proxy
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});

app.listen(3000);
