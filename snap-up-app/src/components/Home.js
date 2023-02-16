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
    <div className="container row mx-auto justify-content-center home-container">
      <h1 className="d-flex justify-content-center mt-4 bg-info text-white">
        Welcome to Snap Up!
      </h1>
      <div className="card border-info m-2 p-0">
        <img
          src={selection_screen}
          className="card-img-top border border-info"
          alt="selection_screen"
        ></img>
        <div className="card-body">
          <h5 className="card-title text-dark">
            Smash together two themed decks of 6 cards.
          </h5>
          <p className="card-text text-dark">
            A different game every time!<br></br>
            Enter your name and room, choose your avatar and decks then tell a
            friend to enter the same room!
          </p>
        </div>
      </div>
      <div className="card border-info m-2 p-0">
        <div className="card-body">
          <h5 className="card-title text-dark">
            Place your cards to boost your side's power.
          </h5>
          <p className="card-text text-dark">
            Cards have special effects!<br></br>
            Make sure to right-click or drag them to read their secret powers!
            Boost your energy or cards, draw new cards, and more!
          </p>
        </div>
        <img
          src={game_screen}
          className="card-img-bottom border border-info"
          alt="game_screen"
        ></img>
      </div>
      <div className="card border-info m-2 p-0">
        <img
          src={winner_screen}
          className="card-img-top border border-info"
          alt="winner_screen"
        ></img>
        <div className="card-body">
          <h5 className="card-title text-dark">
            Can your decks beat your opponents?
          </h5>
          <p className="card-text text-dark">
            Have more power than your opponent in 2 out of the 3 lanes to
            win.<br></br>
            This quick game of strategy and fun will keep you and your friends
            entertained for days!
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <button
          type="button"
          onClick={goToPlayerForm}
          className="btn btn-info btn-lg text-white"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
