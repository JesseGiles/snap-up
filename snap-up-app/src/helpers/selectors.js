// This is only called at the start of the game
import abilities from "../db/abilities.js";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
//consider the rest params (...args)
const enterBattlefield = (functionRef, ...args) => {
  
  let callback = abilities[functionRef].action
  return callback(...args);
}

const addUpPower = (array) => {
  let droppedCards = array;
  let totalPower = 0;
  for (let i = 0; i < 4; i++) {
    if (droppedCards.length > 0 && droppedCards[i]) {
      totalPower += droppedCards[i].power;
    }
  }

  return totalPower;
};


export { shuffle, enterBattlefield, addUpPower };
