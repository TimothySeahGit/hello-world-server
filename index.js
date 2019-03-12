const http = require("http");
const port = 8081;
const server = http.createServer();

server.on("request", (req, res) => {
  //respond to requests
  //   console.log("received request", req);
  console.log("Route", req.url);
  if (req.url === "/watermelon") {
    res.end("🍉");
  } else {
    res.end("Allo");
  }
});

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});