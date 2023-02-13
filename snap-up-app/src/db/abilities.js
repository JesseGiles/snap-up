import { shuffle } from "../helpers/selectors.js";

const friendlyCardsAddPower = (num, laneArray) => {
  let newArr = [...laneArray];
  for (let card of newArr) {
    card.power += num;
  }
  console.log("friendlyCardsAddPower set state with: ", newArr);
  return newArr;
};

const drawCards = (numCards, deck, hand ) => {
  const newDeck = deck;
  const newHand = hand;
  while (numCards > 0 && newDeck.length > 0) {
    newHand.push(newDeck.pop());
    numCards -= 1
  }

  // map through each of the cardzone arrays and set cardPosition = 'fixed'
  return [newDeck, newHand];
};

const addEnergy = (numEnergy, state) => {
  let newEnergy =  state.energy;
  newEnergy += numEnergy
  return newEnergy
}

const playCardFromDeck = (numCards, laneArray, deck) => {
  console.log("LaneArray is:", laneArray)
  const newDeck = deck
  let newArr = laneArray
  while (numCards > 0 && newDeck.length > 0 && newArr.length < 4){
    newArr.push(newDeck.pop())
    numCards -= 1
  }
  return [newDeck, newArr]
}

const shuffleHandIntoDeck = (numCards, deck, hand) => {
  const newDeck = shuffle(deck.concat(hand));
  const newHand = [];
  console.log("shuffleHandIntoDeck, newDeck:", newDeck, "newHand:", newHand);
  for (let i = 0; i < (numCards + 1); i++) {
    if (newDeck.length > 0) {
      newHand.push(newDeck.pop());
    }
  }
  return [newDeck, newHand];
}

// const enemyCardsLosePower = (numPower, laneArray, state) => {
//   let newArr = [...laneArray];
//   for (let card of newArr) 
//     card.power -= numPower;
//   }
//   console.log(" set state with: ", newArr);
//   return newArr;
// };

const abilities = {
  'addPower': {
    description: "Give friendly cards at this location +1 power.",
    action: friendlyCardsAddPower,
  },
  'drawCards': {
    description: "Draw a card",
    action: drawCards,
  },
  'addEnergy' : {
    description: "Add energy on your next turn",
    action: addEnergy,
  },
  'playCardFromDeck' : {
    description: "A random card is placed in this location from your deck for next turn.",
    action: playCardFromDeck,
    
  },
  'shuffleHandIntoDeck' : {
    description: "Shuffle your hand back into your deck and draw three new cards.",
    action: shuffleHandIntoDeck,
  }
}

export default abilities;


