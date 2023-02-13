import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
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
    <FormControl>
      <TextField
        label="Player Name"
        value={playerName}
        onChange={(event) => props.setPlayerName(event.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Room"
        value={roomSelected}
        onChange={(event) => props.setRoom(event.target.value)}
        fullWidth
        margin="normal"
      />
      <Grid item xs={6}>
        <p>Avatar:</p>
        {avatarImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.label}
            style={{
              height: "150px",
              cursor: "pointer",
              border: avatarSelected === image.id ? "5px solid blue" : "",
            }}
            onClick={() => {
              props.setAvatarSelected(image.id);
              props.setAvatarImage(image.src);
            }}
          />
        ))}
      </Grid>
      <Grid item xs={6}>
        <p>Deck One:</p>
        {deckImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.label}
            style={{
              height: "150px",
              cursor: "pointer",
              border: deckOneSelected === image.id ? "5px solid blue" : "",
            }}
            onClick={() => {
              props.setDeckOneSelected(image.id);
              props.setDeckOneImage(image.src);
            }}
          />
        ))}
      </Grid>
      <Grid item xs={6}>
        <p>Deck Two:</p>
        {deckTwoImages().map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.label}
            style={{
              height: "150px",
              cursor: "pointer",
              border: deckTwoSelected === image.id ? "5px solid blue" : "",
            }}
            onClick={() => {
              props.setDeckTwoSelected(image.id);
              props.setDeckTwoImage(image.src);
            }}
          />
        ))}
      </Grid>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit
      </Button>
    </FormControl>
  );
}

export default PlayerForm;
