import React, { useEffect, useState } from "react";
import Game from "./game/Game";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

function Connection(props) {
  // const socket = props.socket;
  // const [messages, setMessages] = useState([]);
  // const [users, setUsers] = useState([]);
  const [opponentName, setOpponentName] = useState("");
  const [opponentAvatar, setOpponentAvatar] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    
    socket.emit("message", {
      player: props.playerName,
      avatar: props.avatarImage,
      room: props.room
    });
  }, []);

  useEffect(() => {
    socket.on("newUserResponse", (data) => {
      console.log("newUserResponseDATA", data);
      console.log(
        "data[0].player",
        data[0].player,
        "props.playerName",
        props.playerName
      );
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

  useEffect(() => {
    socket.on("setGameLocations", (data) => {
      console.log("setGameLocationsDATA", data);
      setLocations(data);
      console.log("LOCATIONS IN CLIENT SET TO:", locations);
    });
  }, [socket, locations]);

  if (opponentName && opponentAvatar && locations.length > 0) {
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
        locations={locations}
      />
    );
  }
  return <h1>Waiting for connection...</h1>;
}

export default Connection;
