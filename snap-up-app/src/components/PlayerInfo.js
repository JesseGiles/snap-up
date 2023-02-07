import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import Game from "./game/Game";
import { avatarImages, deckImages } from "../db/images";

function PlayerInfo(props) {
  const [playerName, setPlayerName] = useState("");
  const [opponentName, setOpponentName] = useState("Jason Voorhees");
  const [avatarSelected, setAvatarSelected] = useState(1);
  const [opponentAvatar, setOpponentAvatar] = useState(
    "cardImages/horror/jason.png"
  );
  const [deckOneSelected, setDeckOneSelected] = useState(1);
  const [deckTwoSelected, setDeckTwoSelected] = useState(2);
  const [avatarImage, setAvatarImage] = useState("cardImages/horror/jason.png");
  const [deckOneImage, setDeckOneImage] = useState(
    "cardImages/horror/jason.png"
  );
  const [deckTwoImage, setDeckTwoImage] = useState(
    "cardImages/pusheen/pusheen.png"
  );

  //console.log("Images selected:", avatarImage, deckOneImage, deckTwoImage);
  // console.log("playerInfo props are:", props);
  if (props.playerInfo === false) {
    return (
      <PlayerForm
        setPlayerInfo={props.setPlayerInfo}
        playerName={playerName}
        setPlayerName={setPlayerName}
        avatarSelected={avatarSelected}
        setAvatarSelected={setAvatarSelected}
        deckOneSelected={deckOneSelected}
        setDeckOneSelected={setDeckOneSelected}
        deckTwoSelected={deckTwoSelected}
        setDeckTwoSelected={setDeckTwoSelected}
        avatarImage={avatarImage}
        setAvatarImage={setAvatarImage}
        deckOneImage={deckOneImage}
        setDeckOneImage={setDeckOneImage}
        deckTwoImage={deckTwoImage}
        setDeckTwoImage={setDeckTwoImage}
      />
    );
  } else {
    console.log("playerInfo props are:", props);
    return (
      <Game
        playerName={playerName}
        opponentName={opponentName}
        avatar={avatarSelected}
        opponentAvatar={opponentAvatar}
        deckOne={deckOneSelected}
        deckTwo={deckTwoSelected}
        avatarImage={avatarImage}
        deckOneImage={deckOneImage}
        deckTwoImage={deckTwoImage}
      />
    );
  }
}

export default PlayerInfo;
