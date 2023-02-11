const friendlyCardsAddPower = (num, laneArray) => {
  let newArr = [...laneArray];
  for (let card of newArr) {
    card.power += num;
  }
  console.log("friendlyCardsAddPower set state with: ", newArr);
  return newArr;
};

const drawCards = (numCards, state ) => {
  const newDeck = [...state.deck];
  const newHand = [...state.hand];
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

const playCardFromDeck = (numCards, state, laneArray) => {
  console.log("LaneArray is:", laneArray)
  const newDeck = [...state.deck]
  let newArr = [...laneArray];
  while (numCards > 0 && newDeck.length > 0 && newArr.length < 4){
    newArr.push(newDeck.pop())
    numCards -= 1
  }
  return [newDeck, newArr]
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
}

export default abilities;


