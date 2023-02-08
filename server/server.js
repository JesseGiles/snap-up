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
let turnInfo = [];

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
      // clear the users
      users = [];
    } else {
      console.log("Waiting for another player to join...");
    }
  });

  socket.on("nextTurn", (data) => {
    //Listens and logs the message to the console
    console.log("This was received from the CLIENT for nextTurn:", data);
    // console.log("All connected users: ", data);
    // socketIO.emit("messageResponse", data);
    turnInfo.push(data);
    console.log("All information received:", turnInfo);
    if (turnInfo.length >= 2) {
      socketIO.emit("turnInfo", turnInfo);
      // clear the turnInfo
      turnInfo = [];
    } else {
      console.log("Waiting for opponent to finish their turn...");
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
