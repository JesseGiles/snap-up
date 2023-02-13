import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUpPower } from "../../helpers/selectors";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function GameOver(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const gameOverState = props.gameOverState;
  const isGameOver = gameOverState.isGameOver;

  const startNewGame = (event) => {
    navigate("/playerform");
  };

  const winner =
    "https://thumbs.dreamstime.com/b/banner-text-winner-bright-design-vector-illustration-174468593.jpg";
  const loser =
    "https://img.freepik.com/premium-vector/loser-word-comic-book-pop-art-vector-illustration_703393-247.jpg";
  const tie = "https://sd.keepcalms.com/i/keep-calm-it-s-a-tie-game.png";

  //calculate winners
  const playerLeftCardZonePoints = addUpPower(gameOverState.leftCardZone);
  const playerMiddleCardZonePoints = addUpPower(gameOverState.middleCardZone);
  const playerRightCardZonePoints = addUpPower(gameOverState.rightCardZone);
  const oppLeftCardZonePoints = addUpPower(gameOverState.oppLeftCardZone);
  const oppMiddleCardZonePoints = addUpPower(gameOverState.oppMiddleCardZone);
  const oppRightCardZonePoints = addUpPower(gameOverState.oppRightCardZone);

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

  const winnerOrLoser = () => {
    if (playerWins > oppWins) {
      return <img src={winner} height="200px" width="400px" />;
    } else if (oppWins > playerWins) {
      return <img src={loser} height="200px" width="300px" />;
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={isGameOver}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Game Over!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{winnerOrLoser()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={startNewGame}>
            Back to Deck Selection
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameOver;
