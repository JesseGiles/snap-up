const express = require("express");
const app = express();
const PORT = 4000;
const { locations } = require("./locations");

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

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const getLocations = () => {
  const randomLocations = shuffle(locations);
  const gameLocations = randomLocations.slice(0, 3);
  console.log("Our array has 3 locations:", gameLocations);
  return gameLocations;
};

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
      socketIO.emit("setGameLocations", getLocations());
      // clear the users
      users = [];
    } else {
      console.log("Waiting for another player to join...");
    }
  });

  socket.on("opponentReady", (data) => {
    socketIO.emit("opponentReady", data);
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
