import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import { addUpPower } from "../helpers/selectors";

export default function GameOver() {
  const location = useLocation();
  console.log("STATE RECEIVED BY GAMEOVER IS: ", location.state);

  const winner =
    "https://thumbs.dreamstime.com/b/banner-text-winner-bright-design-vector-illustration-174468593.jpg";
  const loser =
    "https://img.freepik.com/premium-vector/loser-word-comic-book-pop-art-vector-illustration_703393-247.jpg";
  const tie = "https://sd.keepcalms.com/i/keep-calm-it-s-a-tie-game.png";

  // temporarily making it so it's always a win


  const navigate = useNavigate();

  const rechoose = (event) => {
    navigate("/playerform");
  };

  const startGame = (event) => {
    navigate("/game");
  };

  const playerLeftCardZonePoints = addUpPower(location.state.leftCardZone);
  const playerMiddleCardZonePoints = addUpPower(location.state.middleCardZone);
  const playerRightCardZonePoints = addUpPower(location.state.rightCardZone);
  const oppLeftCardZonePoints = addUpPower(location.state.oppLeftCardZone);
  const oppMiddleCardZonePoints = addUpPower(location.state.oppMiddleCardZone);
  const oppRightCardZonePoints = addUpPower(location.state.oppRightCardZone);

  let playerWins = 0;
  let oppWins = 0;

  if (playerLeftCardZonePoints > oppLeftCardZonePoints) {
    playerWins++;
    console.log("You won Left Card Zone");
  } else if (oppLeftCardZonePoints > playerLeftCardZonePoints) {
    oppWins++;
    console.log("You lost Left Card Zone");
  } else {
    console.log("LeftCardZone is a tie");
  }
  if (playerMiddleCardZonePoints > oppMiddleCardZonePoints) {
    playerWins++;
    console.log("You won Middle Card Zone");
  } else if (oppMiddleCardZonePoints > playerMiddleCardZonePoints) {
    oppWins++;
    console.log("You lost Middle Card Zone");
  } else {
    console.log("MiddleCardZone is a tie");
  }
  if (playerRightCardZonePoints > oppRightCardZonePoints) {
    playerWins++;
    console.log("You won Right Card Zone");
  } else if (oppRightCardZonePoints > playerRightCardZonePoints) {
    oppWins++;
    console.log("You lost Right Card Zone");
  } else {
    console.log("RightCardZone is a tie");
  }
  
  console.log("player wins:", playerWins, "opponent wins:", oppWins);

  if (playerWins > oppWins) {
    return (
      <div className="winner">
        <img src={winner} height="600px" />
        <Button onClick={rechoose} variant="contained" color="primary">
          Choose new decks
        </Button>
        <Button onClick={startGame} variant="contained" color="primary">
          Start another Game
        </Button>
      </div>
    );
  } else if (oppWins > playerWins) {
    return (
      <div className="loser">
        <img src={loser} height="600px" />
        <Button onClick={rechoose} variant="contained" color="primary">
          Choose new decks
        </Button>
        <Button onClick={startGame} variant="contained" color="primary">
          Start another Game
        </Button>

      </div>
    );
  } else {
    return (
      <div className="tie">
        <img src={tie} height="600px" />
        <Button onClick={rechoose} variant="contained" color="primary">
          Choose new decks
        </Button>
        <Button onClick={startGame} variant="contained" color="primary">
          Start another Game
        </Button>

      </div>
    );
  }
}
