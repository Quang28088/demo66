const http = require("http");

const server = http.createServer((req, res)=> {
  res.end("Welcome to nodejs server!")
});

server.listen(3000, ()=> {
    console.log('Server is listenin on port 3000')
});
