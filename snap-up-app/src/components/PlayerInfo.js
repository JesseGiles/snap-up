import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import Connection from "./Connection";
import Home from "./Home";
import GameOver from "./GameOver";
import { avatarImages, deckImages } from "../db/images";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

function PlayerInfo(props) {
  const [playerName, setPlayerName] = useState("");
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
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/playerform"
            element={
              <PlayerForm
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
            path="/connection"
            element={
              <Connection
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
          <Route path="/gameover" element={<GameOver />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default PlayerInfo;
