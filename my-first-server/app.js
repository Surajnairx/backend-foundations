const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Context-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>hello world</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
