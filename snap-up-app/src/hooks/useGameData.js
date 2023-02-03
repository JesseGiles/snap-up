import { useState, useEffect } from "react";

const useGameData = () => {
  const [state, setState] = useState({
    deck: [],
    hand: [],
    energy: 0,
    turn: 0,
  });

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return { state };
};

export default useGameData;
