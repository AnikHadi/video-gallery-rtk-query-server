const jsonServer = require("json-server");
const express = require("express");
const app = express();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

// Bind the router db to the app
app.db = router.db;

app.use(middlewares);

app.use(router);
app.get((req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Listening this server port : ", port);
});
