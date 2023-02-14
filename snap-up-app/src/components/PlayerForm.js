import React from "react";
import { avatarImages, deckImages } from "../db/images";
import { useNavigate } from "react-router-dom";

function PlayerForm(props) {
  const socket = props.socket;
  let playerName = props.playerName;
  let avatarSelected = props.avatarSelected;
  let deckOneSelected = props.deckOneSelected;
  let deckTwoSelected = props.deckTwoSelected;
  let roomSelected = props.room;

  const handleSubmit = (event) => {
    socket.once("room full", () => {
      alert(
        "That room is in use by two players, redirecting to home. Please try again with another room id."
      );
      navigate("/");
    });

    if (
      playerName &&
      avatarSelected &&
      deckOneSelected &&
      deckTwoSelected &&
      roomSelected
    ) {
      event.preventDefault();
      redirectingUser();
    } else {
      alert("You still need to enter your name or select all your choices.");
    }
  };

  const navigate = useNavigate();
  const redirectingUser = () => {
    navigate("/game");
  };
  //prevents a player from selecting the same deck half twice
  const deckTwoImages = () => {
    const deckTwoVals = [];
    for (let image of deckImages) {
      if (image.id !== deckOneSelected) {
        deckTwoVals.push(image);
      }
    }
    return deckTwoVals;
  };
  // change TextField to use value={playerName} when not testing
  return (
    <form>
      <div className="p-2 m-2">
        <input class="form-control form-control-lg" type="text" placeholder="Enter your name here" onChange={(event) => props.setPlayerName(event.target.value)}/>
      </div>
      <div className="p-2 m-2">
        <input class="form-control form-control-lg" type="text" placeholder="Enter a room name here" onChange={(event) => props.setRoom(event.target.value)}/>
      </div>
      <div className="p-2 m-2">
        <h4>Select your avatar:</h4>
        {avatarImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.label}
            className="rounded-circle"
            style={{
              height: "100px",
              cursor: "pointer",
              border: avatarSelected === image.id ? "5px solid #0dcaf0" : "",
            }}
            onClick={() => {
              props.setAvatarSelected(image.id);
              props.setAvatarImage(image.src);
            }}
          />
        ))}
      </div>
      <div className="p-2 m-2">
        <h4>Select your first deck:</h4>
        {deckImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.label}
            style={{
              height: "150px",
              cursor: "pointer",
              border: deckOneSelected === image.id ? "5px solid #0dcaf0" : "",
            }}
            onClick={() => {
              props.setDeckOneSelected(image.id);
              props.setDeckOneImage(image.src);
            }}
          />
        ))}
      </div>
      <div className="p-2 m-2">
        <h4>Select your second deck:</h4>
        {deckTwoImages().map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.label}
            style={{
              height: "150px",
              cursor: "pointer",
              border: deckTwoSelected === image.id ? "5px solid #0dcaf0" : "",
            }}
            onClick={() => {
              props.setDeckTwoSelected(image.id);
              props.setDeckTwoImage(image.src);
            }}
          />
        ))}
      </div>
      <div className="row mx-auto mt-4 justify-content-center">
        <button type="button" onClick={handleSubmit} className="btn btn-info btn-lg text-white">
          PLAY A GAME!
        </button>
      </div>
    </form>
  );
}

export default PlayerForm;
