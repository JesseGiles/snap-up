import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { avatarImages, deckImages } from "../db/images";

function PlayerForm(props) {
  let playerName = props.playerName;
  let avatarSelected = props.avatarSelected;
  let deckOneSelected = props.deckOneSelected;
  let deckTwoSelected = props.deckTwoSelected;
  let avatarImage = props.avatarImage;
  let deckOneImage = props.deckOneImage;
  let deckTwoImage = props.deckTwoImage;

  const handleSubmit = (event) => {
    if (playerName && avatarSelected && deckOneSelected && deckTwoSelected) {
      event.preventDefault();
      props.setPlayerInfo(true);
      // console.log(`Player Name: ${playerName}`);
      // console.log(`Avatar: ${avatarSelected}`);
      // console.log(`Avatar Image: ${avatarImage}`);
      // console.log(`Deck One: ${deckOneSelected}`);
      // console.log(`Deck One Image: ${deckOneImage}`);
      // console.log(`Deck Two: ${deckTwoSelected}`);
      // console.log(`Deck Two Image: ${deckTwoImage}`);
    } else {
      alert("You still need to enter your name or select all your choices.");
    }
  };

  return (
    <FormControl>
      <TextField
        label="Player Name"
        value={playerName}
        onChange={(event) => props.setPlayerName(event.target.value)}
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
        {deckImages.map((image) => (
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
