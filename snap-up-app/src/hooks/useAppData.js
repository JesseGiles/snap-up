import { useState, useEffect } from "react";

const useAppData = () => {
  const [player, setPlayer] = useState(1); //self or opp may make more sense
  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([]);
  const [energy, setEnergy] = useState(0);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return [
    player,
    setPlayer,
    deck,
    setDeck,
    hand,
    setHand,
    turn,
    setTurn,
    energy,
    setEnergy,
  ];
};

export default useAppData;
