import React, { useState } from "react";
import { addUpPower } from "../../helpers/game-helpers";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function GameOver(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const gameOverState = props.gameOverState;
  const isGameOver = gameOverState.isGameOver;

  const startNewGame = (event) => {
    props.socket.emit("leave room", {});
    window.location = "/";
  };

  const winner =
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODY3MmMwMDU5YTZmMWUzZjE0MTU1N2VmMGM1MDY3NmU0ZjY0OTFiNiZjdD1z/fYxHYBB1k7aQwjGhSc/giphy.gif";
  const loser =
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDVkZDNhMzdjYWJiMGY5MGJlMTMzNDEzODg0NDBjMmQ4ZWYwNzZiYyZjdD1z/8SM09J36uWOPUjYywB/giphy.gif";
  const tie = "https://media2.giphy.com/media/lny72LI7fhDqVWk0ZK/giphy.gif?cid=ecf05e4789aj3bt8itnz2feeneix265b7fnb2l1vnb71kcty&rid=giphy.gif";

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
  } else if (oppLeftCardZonePoints > playerLeftCardZonePoints) {
    oppWins++;
  } 
  
  if (playerMiddleCardZonePoints > oppMiddleCardZonePoints) {
    playerWins++;
  } else if (oppMiddleCardZonePoints > playerMiddleCardZonePoints) {
    oppWins++;
  } 

  if (playerRightCardZonePoints > oppRightCardZonePoints) {
    playerWins++;
  } else if (oppRightCardZonePoints > playerRightCardZonePoints) {
    oppWins++;
  }


  const gameStatus = () => {
    if (playerWins > oppWins) {
      return "You won!";
    } else if (oppWins > playerWins) {
      return "You lost!";
    } else {
      return "It's a tie!";
    }
  };

  const winnerOrLoser = () => {
    if (playerWins > oppWins) {
      return <img src={winner} height="200px"  />;
    } else if (oppWins > playerWins) {
      return <img src={loser} height="200px"  />;
    } else {
      return <img src={tie} height="200px"  />;
    }
  };

  return (
    <>
      <Modal
        show={isGameOver}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="game-over-modal"
      >
        <Modal.Header className="game-over-header">
          <Modal.Title>{gameStatus()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{winnerOrLoser()}</Modal.Body>
        <Modal.Footer className="game-over-footer">
          <Button variant="outline-dark" onClick={startNewGame}>
            Back to Home
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameOver;
