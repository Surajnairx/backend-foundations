const https = require("http");

const express = require("express");

const app = express();

const server = https.createServer(app);

server.listen(3000);
