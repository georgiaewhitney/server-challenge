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
/*
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
*/

// challenge 5
const cheeseStore = [];
const postCheese = express.urlencoded({ extended: false });

server.get("/cheese", (request, response) => {
  const cheeseList = cheeseStore.map((cheese) => {
    return `<li>${cheese.name} - ${cheese.rating}/5</li>`;
  });
  response.send(
    `
    <form method="POST">
      <label for="name">Cheese:</label>
      <input name="name" id="name">
      <label for="rating">Rating (0-5):</label>
      <input type="range" name="rating" id="rating" min="0" max="5">
      <button>Rate</button>
    </form>
    <ul>
    ${cheeseList.join("")}
    </ul>
    `
  );
});

server.post("/cheese", postCheese, (request, response) => {
  const name = request.body.name;
  const rating = request.body.rating;
  cheeseStore.push({ name, rating });
  response.redirect("/cheese");
});
