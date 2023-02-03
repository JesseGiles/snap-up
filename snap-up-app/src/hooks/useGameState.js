import { useState, useEffect } from "react";

const useGameState = (initial) => {
  const [battlefield, setBattlefield] = useState({
    lanes: {
      left: {
        p1CardZone: [],
        p2CardZone: [],
        locationId: 0,
      },
      center: {
        p1CardZone: [],
        p2CardZone: [],
        locationId: 0,
      },
      right: {
        p1CardZone: [],
        p2CardZone: [],
        locationId: 0,
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  return { state };
};

export default useGameState;
