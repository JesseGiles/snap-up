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
  
  console.log("what is functionref?", functionRef);
  let callback = abilities[functionRef].action
  console.log("this is enterbattlefield the ability callback:", callback)
  console.log("enterBattlefield triggered with args:", ...args)
  return callback(...args);
}



export { shuffle, enterBattlefield };
