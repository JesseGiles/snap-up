import abilities from "../abilities.js";

const cerealDeck = {
  name: "Cereal Deck",
  cards: [
    {
      id: 25,
      name: "Snap Crackle Pop",
      cost: 1,
      power: 1,
      img: "/cardImages/cereal/snapcrackle.gif",
      ability: ['addPower', 1],
      description: abilities.addPower.description,
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false
    },
    {
      id: 26,
      name: "Tricks",
      cost: 1,
      power: 1,
      img: "/cardImages/cereal/trix.gif",
      ability: ['addEnergy', 3],
      description: "Add 3 bonus energy on your next turn",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false
    },
    {
      id: 27,
      name: "Toucan Sam",
      cost: 1,
      power: 1,
      img: "/cardImages/cereal/ToucanSam2.png",
      ability: ['addEnergy', 3],
      description: "Add 3 bonus energy on your next turn",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false
    },
    {
      id: 28,
      name: "Lucky",
      cost: 1,
      power: 1,
      img: "/cardImages/cereal/Lucky2.png",
      ability: ['playCardFromDeck', 1],
      description: "Play 1 card from your deck into this lane",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false
    },
    {
      id: 29,
      name: "Cpt Crunch",
      cost: 1,
      power: 1,
      img: "/cardImages/cereal/CptCrunch2.png",
      ability: ['shuffleHandIntoDeck', 3],
      description: "Shuffle your hand back into your deck and draw three new cards.",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false
    },
    {
      id: 30,
      name: "Tony the Tiger",
      cost: 1,
      power: 1,
      img: "/cardImages/cereal/Tony2.png",
      ability: ['shuffleHandIntoDeck', 3],
      description: "Shuffle your hand back into your deck and draw three new cards.",
      cardPosition: "hand",
      deck: "cereal",
      locationBonus: false
    },
  ],
};

export default cerealDeck;
