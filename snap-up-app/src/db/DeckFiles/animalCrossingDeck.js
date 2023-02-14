import abilities from "../abilities.js";

const animalCrossingDeck = {
  name: "Animal Crossing Deck",
  cards: [
    {
      id: 43,
      name: "Rover",
      cost: 1,
      power: 2,
      img: "/cardImages/animalcrossing/Rover.png",
      ability: ['addEnergy', 1],
      description: "Add a bonus energy on your next turn",
      cardPosition: "hand",
      deck: "animal-crossing",
      locationBonus: false
    },
    {
      id: 44,
      name: "Redd",
      cost: 2,
      power: 5,
      img: "/cardImages/animalcrossing/Redd.png",
      ability: ['addPower', 1],
      description: "Give friendly cards at this location +1 power.",
      cardPosition: "hand",
      deck: "animal-crossing",
      locationBonus: false
    },
    {
      id: 45,
      name: "Tom Nook",
      cost: 3,
      power: 7,
      img: "/cardImages/animalcrossing/Tom_Nook.png",
      ability: ['drawCards', 1 ],
      description: "Draw a card",
      cardPosition: "hand",
      deck: "animal-crossing",
      locationBonus: false
    },
    {
      id: 46,
      name: "K.K. Slider",
      cost: 4,
      power: 7,
      img: "/cardImages/animalcrossing/KK_Slider.png",
      ability: ['addEnergy', 2],
      description: "Add 2 bonus energy on your next turn",
      cardPosition: "hand",
      deck: "animal-crossing",
      locationBonus: false
    },
    {
      id: 47,
      name: "Blathers",
      cost: 5,
      power: 10,
      img: "/cardImages/animalcrossing/Blathers.png",
      ability: ['playCardFromDeck', 2],
      description: "A random card is placed in this location from your deck for next turn.",
      cardPosition: "hand",
      deck: "animal-crossing",
      locationBonus: false
    },
    {
      id: 48,
      name: "Resetti",
      cost: 6,
      power: 15,
      img: "/cardImages/animalcrossing/Resetti.png",
      ability: ['addPower', 6],
      description: "Give all friendly cards in this location +6 power",
      cardPosition: "hand",
      deck: "animal-crossing",
      locationBonus: false
    },
  ],
};

export default animalCrossingDeck;
