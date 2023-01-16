const express = require("express");

const server = express();

module.exports = server;

//challenge 1
server.get("/", (request, response) => {
  response.send(
    `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
      </head>
      <body>
        <h1>Hello Express</h1>
      </body>
    </html>
    `
  );
});
