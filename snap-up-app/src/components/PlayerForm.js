import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const avatarImages = [
  {
    id: 1,
    label: "Jason Voorhees",
    src: "cardImages/horror/jason.png",
  },
  {
    id: 2,
    label: "Pusheen",
    src: "cardImages/pusheen/pusheen.jpeg",
  },
  {
    id: 3,
    label: "Sailor Moon",
    src: "cardImages/sailor/sailor_moon.jpg",
  },
  // ... add more avatar images here
];

const deckImages = [
  {
    id: 1,
    label: "Horror",
    src: "cardImages/horror/jason.png",
  },
  {
    id: 2,
    label: "Pusheen",
    src: "cardImages/pusheen/pusheen.jpeg",
  },
  {
    id: 3,
    label: "Sailor Moon",
    src: "cardImages/sailor/sailor_moon.jpg",
  },
  // ... add more deck images here
];

function PlayerForm(props) {
  let playerName = props.playerName;
  let avatarSelected = props.avatarSelected;
  let deckOneSelected = props.deckOneSelected;
  let deckTwoSelected = props.deckTwoSelected;

  const handleSubmit = (event) => {
    if (playerName && avatarSelected && deckOneSelected && deckTwoSelected) {
      props.setPlayerInfo(true);
      console.log(`Player Name: ${playerName}`);
      console.log(`Avatar: ${avatarSelected}`);
      console.log(`Deck One: ${deckOneSelected}`);
      console.log(`Deck Two: ${deckTwoSelected}`);
    } else {
      alert("You still need to select everything.");
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
            onClick={() => props.setAvatarSelected(image.id)}
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
            onClick={() => props.setDeckOneSelected(image.id)}
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
            onClick={() => props.setDeckTwoSelected(image.id)}
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
