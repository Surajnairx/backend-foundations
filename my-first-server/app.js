const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");
  console.log("URL:", req.url);
  console.log("Method:", req.method);

  res.write("Hello Suraj");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
