import React, { useState } from "react";
import PlayerInfo from "./PlayerInfo";

function App() {
  const [playerInfo, setPlayerInfo] = useState(false);

  return (
    <div className="app">
      <PlayerInfo playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
    </div>
  );
}

export default App;
