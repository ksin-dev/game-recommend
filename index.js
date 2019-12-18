var express = require("express");
var proxy = require("http-proxy-middleware");
var path = require("path");
var app = express();

app.use(
  "/graphql",
  proxy({ target: "http://127.0.0.1:3000", changeOrigin: true })
);

app.use(express.static("./client/dist"));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
})
app.listen(80);
