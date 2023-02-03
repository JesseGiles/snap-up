const abilities = {
  0: {
    description: "I don't do anything special.",
  },
  1: {
    description: "I also dont do anything special.",
  },
  2: {
    description: "My mom said I was special.",
  },
};

const sailorMoonDeck = {
  name: "Sailor Moon Deck",
  cards: [
    {
      name: "Tuxedo Mask",
      cost: 1,
      power: 0,
      img: "/cardImages/jupiter.jpeg",
      ability: abilities[0],
    },
    {
      name: "Sailor Mercury",
      cost: 1,
      power: 3,
      img: "/cardImages/jupiter.jpeg",
      ability: abilities[0],
    },
    {
      name: "Sailor Mars",
      cost: 2,
      power: 5,
      img: "/cardImages/jupiter.jpeg",
      ability: abilities[0],
    },
    {
      name: "Sailor Jupiter",
      cost: 3,
      power: 7,
      img: "/cardImages/jupiter.jpeg",
      ability: abilities[0],
    },
    {
      name: "Sailor Venus",
      cost: 4,
      power: 10,
      img: "/cardImages/jupiter.jpeg",
      ability: abilities[0],
    },
    {
      name: "Sailor Moon",
      cost: 6,
      power: 15,
      img: "/cardImages/jupiter.jpeg",
      ability: abilities[0],
    },
  ],
};

module.exports = { abilities, sailorMoonDeck };
