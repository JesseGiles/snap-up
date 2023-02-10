import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function GameOver(props) {
  const winner =
    "https://thumbs.dreamstime.com/b/banner-text-winner-bright-design-vector-illustration-174468593.jpg";
  const loser =
    "https://img.freepik.com/premium-vector/loser-word-comic-book-pop-art-vector-illustration_703393-247.jpg";
  const tie = "https://sd.keepcalms.com/i/keep-calm-it-s-a-tie-game.png";

  // temporarily making it so it's always a win
  const playerWins = 2;
  const opponentWins = 1;

  const navigate = useNavigate();

  const rechoose = (event) => {
    navigate("/playerform");
  };

  const startGame = (event) => {
    navigate("/game");
  };

  if (playerWins > opponentWins) {
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
  } else if (opponentWins < playerWins) {
    return (
      <div className="loser">
        <img src={loser} height="600px" />
      </div>
    );
  } else {
    return (
      <div className="tie">
        <img src={tie} height="600px" />
      </div>
    );
  }
}
