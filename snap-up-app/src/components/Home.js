import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import selection_screen from "../assets/selection_screen.jpg";
import game_screen from "../assets/game_screen.jpg";
import winner_screen from "../assets/winner_screen.jpg";

export default function Home() {
  const goToPlayerForm = (event) => {
    redirectingUser();
  };

  const navigate = useNavigate();
  const redirectingUser = () => {
    navigate("/playerform");
  };

  return (
    <div className="container row mx-auto justify-content-center">
      <h1 className="d-flex justify-content-center mt-4 bg-info text-white">Welcome to Snap Up!</h1>
      <div className="card col-3 p-3 m-3 border-info">
        <img src={selection_screen} className="card-img-top" alt="selection_screen"></img>
        <div className="card-body">
          <h5 className="card-title text-dark">Smash together two themed decks of six cards.</h5>
          <p className="card-text text-dark">A different game every time! Just choose your name, avatar and decks then choose a room to play with a friend!</p>
        </div>
      </div>
      <div className="card col-3 p-3 m-3  border-info">
        <img src={game_screen} className="card-img-top" alt="game_screen"></img>
        <div className="card-body">
          <h5 className="card-title text-dark">Place your cards to boost your side's power.</h5>
          <p className="card-text text-dark">Cards have special effects! Make sure to right-click or drag them to read their secret powers!</p>
        </div>
      </div>
      <div className="card col-3 p-3 m-3  border-info">
        <img src={winner_screen} className="card-img-top" alt="winner_screen"></img>
        <div className="card-body">
          <h5 className="card-title text-dark">Have more power than your opponent in two out of three lanes to win!</h5>
          <p className="card-text text-dark">Can your mash up of decks beat your opponents? This quick game of strategy and fun will keep you and your friends entertained for days!</p>
        </div>
      </div>
      <div className="row mx-auto mt-4 justify-content-center">
        <button type="button" onClick={goToPlayerForm} className="btn btn-info btn-lg text-white">
          Start Game
        </button>
      </div>
    </div>
  )
};