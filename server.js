const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/db.json' && req.method === 'GET') {
    fs.readFile(`${__dirname}/src/db.json`, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err);
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, () => console.log(`Server running on port ${port}`));