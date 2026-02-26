const http = require("http");
const router = require("./rotues");

const server = http.createServer(router.handler);

server.listen(3000);
