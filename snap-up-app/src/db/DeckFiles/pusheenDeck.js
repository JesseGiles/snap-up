import abilities from "../abilities.js";

const pusheenDeck = {
  name: "Pusheen Deck",
  cards: [
    {
      id: 7,
      name: "Pip",
      cost: 1,
      power: 1,
      img: "/cardImages/pusheen/pip.jpeg",
      ability: ['playCardFromDeck', 1],
      description: "On your next turn, place a card from your deck into this location.",
      cardPosition: "hand",
      deck: "pusheen",
      locationBonus: false
    },
    {
      id: 8,
      name: "Stormy",
      cost: 1,
      power: 3,
      img: "/cardImages/pusheen/stormy.jpeg",
      ability: ['playCardFromDeck', 1],
      description: "On your next turn, place a card from your deck into this location.",
      cardPosition: "hand",
      deck: "pusheen",
      locationBonus: false
    },
    {
      id: 9,
      name: "Pusheen",
      cost: 3,
      power: 5,
      img: "/cardImages/pusheen/pusheen.jpeg",
      ability: ['drawCards', 2],
      description: "Draw two extra cards on your next turn.",
      cardPosition: "hand",
      deck: "pusheen",
      locationBonus: false
    },
    {
      id: 10,
      name: "Dragonsheen",
      cost: 3,
      power: 7,
      img: "/cardImages/pusheen/dragonsheen.gif",
      ability: ['addPower', 2],
      description: "All cards in this location get +2 power.",
      cardPosition: "hand",
      deck: "pusheen",
      locationBonus: false
    },
    {
      id: 11,
      name: "Sloth",
      cost: 5,
      power: 15,
      img: "/cardImages/pusheen/sloth.jpeg",
      ability: ['addPower', 3],
      description: "All cards in this location get +3 power.",
      cardPosition: "hand",
      deck: "pusheen",
      locationBonus: false
    },
    {
      id: 12,
      name: "Pusheenicorn",
      cost: 6,
      power: 12,
      img: "/cardImages/pusheen/super_pusheenicorn.jpeg",
      ability: ['addPower', 4],
      description: "All cards in this location get +4 power.",
      cardPosition: "hand",
      deck: "pusheen",
      locationBonus: false
    },
  ],
};

export default pusheenDeck;
