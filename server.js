// Fixture app for testing the Kovar GitHub Action. /secure sets good headers, /insecure sets none.
const http = require("node:http");
const good = {
  "content-security-policy": "default-src 'self'; script-src 'self'; frame-ancestors 'none'",
  "strict-transport-security": "max-age=63072000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
  "cross-origin-opener-policy": "same-origin",
};
http.createServer((req, res) => {
  const h = { "content-type": "text/html", ...(req.url.startsWith("/secure") ? good : {}) };
  res.writeHead(200, h); res.end(`<h1>${req.url}</h1>`);
}).listen(4789, () => console.log("listening on 4789"));
