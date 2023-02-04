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
    const fetchData = async () => {
      const data = await 
    };
    fetchData();
  }, []);

  // how to handle async with useEffect from https://devtrium.com/posts/async-functions-useeffect
  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const data = await fetch('https://yourapi.com');
  //   }
  
  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, [])
  return { state, setState };
};

export default useGameData;
