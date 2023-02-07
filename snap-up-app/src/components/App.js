import React, { useState } from "react";
import PlayerInfo from "./PlayerInfo";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

function App() {
  const [playerInfo, setPlayerInfo] = useState(false);

  return (
    <div className="app">
      <PlayerInfo playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
    </div>
  );
}

export default App;
