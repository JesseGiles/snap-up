import { useState, useEffect } from "react";
const { abilities, horrorDeck } = require("../db/DeckFiles/horrorDeck.js");

const useGameData = () => {
  const [state, setState] = useState({
    deck: horrorDeck.cards,
    hand: [],
    energy: 0,
    turn: 0,
  });

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return { state, setState };
};

export default useGameData;
