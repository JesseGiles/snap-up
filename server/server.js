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

let users = [];

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} player just connected!`);

  //Listens and logs the message to the console
  socket.on("message", (data) => {
    console.log("This was received from the CLIENT:", data);
    // console.log("All connected users: ", data);
    // socketIO.emit("messageResponse", data);
    users.push(data);
    console.log("All connected users:", users);
    if (users.length >= 2) {
      socketIO.emit("newUserResponse", users);
    } else {
      console.log("Waiting for another player to join...");
    }
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
    users = users.filter((user) => user.socketID !== socket.id);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit("newUserResponse", users);
    socket.disconnect();
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
