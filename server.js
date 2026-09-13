const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const PUBLIC = new Set(['/index.html']);
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const wanted = urlPath === '/' ? '/index.html' : urlPath;
  const isAsset = wanted.startsWith('/assets/') && !wanted.includes('..');
  const file = path.join(ROOT, isAsset || PUBLIC.has(wanted) ? wanted : '/index.html');

  fs.readFile(file, (err, body) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not found');
    }
    const ext = path.extname(file);
    res.writeHead(200, {
      'Content-Type': TYPES[ext] || 'application/octet-stream',
      'Cache-Control': isAsset ? 'public, max-age=604800' : 'no-cache',
    });
    res.end(body);
  });
}).listen(PORT, () => console.log(`Fruit Bats site on :${PORT}`));
