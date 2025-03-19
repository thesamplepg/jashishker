// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const socketio = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = socketio(server);

  io.on("connection", (socket) => {
    socket.on("message", (msg) => {
      io.emit("message", msg);
    });
    socket.on("disconnect", () => {});
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
  });
});
