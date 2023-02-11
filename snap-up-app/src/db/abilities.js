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

const enemyCardsLosePower = (numPower, laneArray, state) => {
  let newArr = [...laneArray];
  for (let card of newArr) {
    card.power -= numPower;
  }
  console.log(" set state with: ", newArr);
  return newArr;
};

const abilities = {
  'addPower': {
    description: "Give friendly cards at this location +1 power.",
    action: friendlyCardsAddPower,
    
  },
  'drawCards': {
    description: "Draw a card",
    action: drawCards,
  },
  'removePower': {
    description: "Give enemy card at this location -1 power",
    action: enemyCardsLosePower,

  },
};

export default abilities;


