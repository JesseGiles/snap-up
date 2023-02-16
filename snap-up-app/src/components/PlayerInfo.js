import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import Connection from "./Connection";
import Splash from "./Splash";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import socketIO from "socket.io-client";
const socket = socketIO.connect("https://snap-up.up.railway.app/");
// const socket = socketIO.connect("http://localhost:4000");

function PlayerInfo(props) {
  const [playerName, setPlayerName] = useState("");
  const [room, setRoom] = useState();
  const [avatarSelected, setAvatarSelected] = useState(1);
  const [deckOneSelected, setDeckOneSelected] = useState(1);
  const [deckTwoSelected, setDeckTwoSelected] = useState(2);
  const [avatarImage, setAvatarImage] = useState("cardImages/horror/jason.png");
  const [deckOneImage, setDeckOneImage] = useState(
    "cardImages/horror/jason.png"
  );
  const [deckTwoImage, setDeckTwoImage] = useState(
    "cardImages/pusheen/pusheen.png"
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/playerform"
          element={
            <PlayerForm
              room={room}
              setRoom={setRoom}
              socket={socket}
              setPlayerInfo={props.setPlayerInfo}
              playerName={playerName}
              setPlayerName={setPlayerName}
              avatarSelected={avatarSelected}
              setAvatarSelected={setAvatarSelected}
              deckOneSelected={deckOneSelected}
              setDeckOneSelected={setDeckOneSelected}
              deckTwoSelected={deckTwoSelected}
              setDeckTwoSelected={setDeckTwoSelected}
              setAvatarImage={setAvatarImage}
              setDeckOneImage={setDeckOneImage}
              setDeckTwoImage={setDeckTwoImage}
            />
          }
        ></Route>
        <Route
          path="/game"
          element={
            <Connection
              room={room}
              socket={socket}
              playerName={playerName}
              avatar={avatarSelected}
              deckOne={deckOneSelected}
              deckTwo={deckTwoSelected}
              avatarImage={avatarImage}
              deckOneImage={deckOneImage}
              deckTwoImage={deckTwoImage}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PlayerInfo;
