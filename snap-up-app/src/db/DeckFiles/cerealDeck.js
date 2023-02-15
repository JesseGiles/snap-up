import abilities from "../abilities.js";

const cerealDeck = {
  name: "Cereal Deck",
  cards: [
    {
      id: 25,
      name: "Snap Crackle",
      cost: 5,
      power: 2,
      img: "/cardImages/cereal/snapcrackle.gif",
      ability: ["playCardFromDeck", 2],
      description:
        "On your next turn, place two cards from your deck into this location.",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false,
    },
    {
      id: 26,
      name: "Tricks",
      cost: 2,
      power: 3,
      img: "/cardImages/cereal/trix.gif",
      ability: ["addEnergy", 2],
      description: "Add two bonus energy on your next turn.",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false,
    },
    {
      id: 27,
      name: "Toucan Sam",
      cost: 3,
      power: 7,
      img: "/cardImages/cereal/ToucanSam2.png",
      ability: ["drawCards", 1],
      description: "Draw an extra card on your next turn.",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false,
    },
    {
      id: 28,
      name: "Lucky",
      cost: 4,
      power: 4,
      img: "/cardImages/cereal/Lucky2.png",
      ability: ["addPower", 2],
      description: "Give all friendly cards in this location +2 power.",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false,
    },
    {
      id: 29,
      name: "Cpt Crunch",
      cost: 3,
      power: 5,
      img: "/cardImages/cereal/CptCrunch2.png",
      ability: ["shuffleHandIntoDeck", 3],
      description:
        "Shuffle your hand back into your deck and draw three new cards.",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false,
    },
    {
      id: 30,
      name: "Tony the Tiger",
      cost: 5,
      power: 10,
      img: "/cardImages/cereal/Tony2.png",
      ability: ["addPower", 4],
      description: "Give all friendly cards in this location +4 power.",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false,
    },
  ],
};

export default cerealDeck;
