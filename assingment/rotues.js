function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello User</title></head>");
    res.write("<body>");
    res.write("<h1>Greetings</h1>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'><button>Submit</button></form>",
    );
    res.write("</body>");
    res.write("</html>");
    res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>User section</title></head>");
    res.write("<body><ul><li>Rinzler</li><li>Scarface</li></ul></body>");
    res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("close", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const message = parsedBody.split("=")[1];
      console.log(message);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
}

exports.handler = requestHandler;
