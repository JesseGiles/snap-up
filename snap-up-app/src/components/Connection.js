import React, { useEffect, useState } from "react";
import Game from "./game/Game";

function Connection(props) {
  const socket = props.socket;
  // const [messages, setMessages] = useState([]);
  // const [users, setUsers] = useState([]);
  const [opponentName, setOpponentName] = useState("");
  const [opponentAvatar, setOpponentAvatar] = useState("");

  useEffect(() => {
    socket.emit("message", {
      player: props.playerName,
      avatar: props.avatarImage,
    });
  }, []);

  useEffect(() => {
    socket.on("newUserResponse", (data) => {
      console.log("Data received from server is:", data);
      console.log("data[0].player", data[0].player);
      console.log("props.playerName", props.playerName);
      if (data[0].player !== props.playerName) {
        setOpponentName(data[0].player);
        setOpponentAvatar(data[0].avatar);
      } else {
        setOpponentName(data[1].player);
        setOpponentAvatar(data[1].avatar);
      }

      console.log(
        "WITH TWO USERS CONNECTED WE SHOULD HAVE OPPONENT NAME AND OPPONENT AVATAR:",
        opponentName,
        opponentAvatar
      );
    });
  }, [socket]);

  if (opponentName && opponentAvatar) {
    return (
      <Game
        playerName={props.playerName}
        opponentName={opponentName}
        avatar={props.avatar}
        opponentAvatar={opponentAvatar}
        deckOne={props.deckOne}
        deckTwo={props.deckTwo}
        avatarImage={props.avatarImage}
        deckOneImage={props.deckOneImage}
        deckTwoImage={props.deckTwoImage}
        socket={socket}
      />
    );
  }
  return <p>Waiting for connection...</p>;
}

export default Connection;
