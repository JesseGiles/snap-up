import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function NextTurnNotReady(props) {
  
  

  if (props.gameOverState === true ) {
    return
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal show={props.waitingForNextTurn} backdrop="static" keyboard={false}>
        <Modal.Header ></Modal.Header>
        <Modal.Body className="waiting-modal">Waiting for {props.opponent} to end their turn...</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default NextTurnNotReady;
