const http = require("http");

const INTERVAL = process.env.HTTP_SERVER_INTERVAL || 1000;
const END = process.env.HTTP_SERVER_END || 10000;

http
  .createServer((request, response) => {
    if (request.method === "GET") {
      const interval = setInterval(() => {
        response.write(`${new Date().toUTCString()}\n`);
      }, INTERVAL);

      setTimeout(() => {
        clearInterval(interval);
        response.end(`Disconnect time: ${new Date().toUTCString()}`);
      }, END);
    }
  })
  .listen(3000, () => {
    console.log("Server running on 3000 port");
  });
