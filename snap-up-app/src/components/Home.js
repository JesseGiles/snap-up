import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  const goToPlayerForm = (event) => {
    event.preventDefault();
    redirectingUser();
  };

  const navigate = useNavigate();
  const redirectingUser = () => {
    navigate("/playerform");
  };

  return (
    <div>
      <h1>Welcome to Snap Up!</h1>
      <Button onClick={goToPlayerForm} variant="contained" color="primary">
        Start Game
      </Button>
    </div>
  );
}
