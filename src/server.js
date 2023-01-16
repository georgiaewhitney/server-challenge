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

// challenge 2
/*
server.get("/colour", (request, response) => {
  const hex = request.query.hex || "ffffff";
  response.send(
    `
    <style>
      body {
        background-color: #${hex};
      }
    </style>
    `
  );
});
*/

// challenge 3
server.get("/colour", (request, response) => {
  const hex = request.query.hex || "ffffff";
  response.send(
    `
    <style>
      body {
        background-color: #${hex};
      }
    </style>
    <form>
      <label for="hex">Hex:</label>
      <input name="hex" id="hex" value="${hex}">
    </form>
    `
  );
});

// challenge 4
server.get("/cheese", (request, response) => {
  response.send(
    `
    <form method="POST">
      <label for="cheese">Cheese:</label>
      <input name="cheese" id="cheese">
      <label for="rating">Rating (0-5):</label>
      <input type="range" name="rating" id="rating" min="0" max="5">
    </form>
    `
  );
});
