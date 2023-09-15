const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
  } else if (req.url === "/About") {
    res.end("Here is the About");
  } else {
    res.end(`
  <h1>Ops</h1>
  <a href="/">Home<a/>
  `);
  }
});

server.listen(5000);
