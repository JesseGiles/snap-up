const express = require("express");
const app = express();
const PORT = 4000;
const { locations } = require("./locations");

//New imports
const http = require("http").Server(app);
const cors = require("cors");

app.use(express.static("../snap-up-app/build"));
app.use(cors());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    // origin: "https://snap-up-production.up.railway.app",
  },
});

let users = [];

let turnInfo = [];

function pairUsers(users, data) {
  let pairedUsers = [];
  for (let user of users) {
    if (user.room === data.room) {
      pairedUsers.push(data);
      pairedUsers.push(user);
    }
  }
  return pairedUsers;
}

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
    let roomNum = data.room;
    console.log("This was received from the CLIENT:", data);

    let pairedUsers = pairUsers(users, data);
    console.log("there are paired users", pairedUsers);
    users.push(data);

    if (
      socketIO._nsps.get("/").adapter.rooms.get(roomNum) === undefined ||
      socketIO._nsps.get("/").adapter.rooms.get(roomNum).size < 2
    ) {
      socket.join(roomNum);
    } else {
      socket.emit("room full");
    }

    if (pairedUsers.length === 2) {
      users = users.filter((user) => {
        
        if (user.player !== pairedUsers[0].player) {
          if (user.player !== pairedUsers[1].player) {
            return true;
          }
        }
      });
      console.log("All connected users without pair:", users);
      //you're the second player to connect set the default vals

      console.log("paired users:", pairedUsers);
      socketIO.to(roomNum).emit("newUserResponse", pairedUsers);
      socketIO.to(roomNum).emit("setGameLocations", getLocations());
    }

    socket.on("opponentReady", (data) => {
      socket.to(roomNum).emit("opponentReady", data);
    });

    socket.on("nextTurn", (data) => {
      

      turnInfo.push(data);
      console.log("All information received:", turnInfo);
      if (turnInfo.length === 2) {
        socketIO.to(roomNum).emit("turnInfo", turnInfo);
        // clear the turnInfo
        turnInfo = [];
      } 
    });

    socket.on("leave room", (data) => {
      socket.leave(roomNum);
      console.log("You have left the room!");
    });
  });

 

  socket.on("disconnect", () => {
    console.log(`⚡: ${socket.id} player disconnected connected!`);
    
    
    socket.disconnect();
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
 
});
