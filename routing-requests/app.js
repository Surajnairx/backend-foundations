const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>This is my form page</title></head>");
    res.write(
      "<body><form action='message' method='POST'><input type='text' name='message'><button>Submit</button></form></body>",
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>This is my page</title></head>");
  res.write("<body><h1>hello rinzler</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
