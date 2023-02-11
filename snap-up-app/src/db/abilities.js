


const friendlyCardsAddPower = (laneArray) => {
  let newArr = [...laneArray]
  for (let card of newArr) {
    card.power += 1
  }
  console.log('friendlyCardsAddPower set state with: ', newArr)
  return newArr
}


const abilities = {
  0: {
    description: "Give friendly cards at this location +1 power.",
    action: friendlyCardsAddPower
    // friendlyCardsAddPower()
  },
  1: {
    description: "All enemy cards are -1 power at this location.",
  },
  2: {
    description:
      "If this is the only friendly card at this location, +5 power.",
  },
};

module.exports = { abilities };


//[{power: 1}, {power: 2}]