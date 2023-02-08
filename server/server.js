const express = require("express");
const app = express();
const PORT = 4000;

//New imports
const http = require("http").Server(app);
const cors = require("cors");

const {
  addPlayer,
  removePlayer,
  getPlayer,
  getPlayersInRoom,
} = require("./player");

app.use(cors());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} player just connected!`);

  //Listens and logs the message to the console
  socket.on("playerdata", (data) => {
    console.log(data);
  });

  let room = 0;

  // socket.on("join", ({ name }, callback) => {

  socket.on("join", ({ name }) => {
    console.log("received name:", name);
    console.log("room is:", room);
    const { error, player } = addPlayer({ id: socket.id, name, room });

    if (error) return callback(error);

    // Emit will send message to the player
    // who had joined
    socket.emit("message", {
      player: "admin",
      text: `${player.name},
        welcome to room ${player.room}.`,
    });

    // Broadcast will send message to everyone
    // in the room except the joined player
    socket.broadcast.to(player.room).emit("message", {
      player: "admin",
      text: `${player.name}, has joined`,
    });

    socket.join(player.room);

    socketIO.to(player.room).emit("roomData", {
      room: player.room,
      players: getPlayersInRoom(player.room),
    });
    // callback();
  });

  // socket.on("sendMessage", (message, callback) => {
  // socket.on("sendMessage", (message) => {
  //   const player = getPlayer(socket.id);
  //   socketIO
  //     .to(player.room)
  //     .emit("message", { player: player.name, text: message });

  //   socketIO.to(player.room).emit("roomData", {
  //     room: player.room,
  //     players: getPlayersInRoom(player.room),
  //   });
  //   // callback();
  // });

  socket.on("disconnect", () => {
    const player = removePlayer(socket.id);
    if (player) {
      socketIO.to(player.room).emit("message", {
        player: "admin",
        text: `${player.name} had left`,
      });
    }
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
