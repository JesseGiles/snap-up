import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import Game from "./game/Game";

function PlayerInfo(props) {
  const [playerName, setPlayerName] = useState("");
  const [opponentName, setOpponentName] = useState("Jason Voorhees");
  const [avatarSelected, setAvatarSelected] = useState(1);
  const [opponentAvatar, setOpponentAvatar] = useState(
    "cardImages/horror/jason.png"
  );
  const [deckOneSelected, setDeckOneSelected] = useState(1);
  const [deckTwoSelected, setDeckTwoSelected] = useState(2);

  console.log("playerInfo props are:", props);
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
      />
    );
  }
}

export default PlayerInfo;
