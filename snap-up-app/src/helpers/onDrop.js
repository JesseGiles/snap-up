function placeCardOnBattlefield(card, array) {
  array.push(card);
  // console.log("selectors line 34, state is:", state);
  // const newHand = [...state.hand].filter(
  //   (cardInArray) => cardInArray._id !== card.id
  // );
  // setState((prev) => ({
  //   ...prev,
  //   // hand: newHand,
  // }));
}

function reduceEnergyOnDrop(cost, energy) {
  console.log("initial energyondrop: ", energy);
  energy -= cost;
  console.log("energy after reduce:", energy);
  return energy;
}
function removeCardFromHand(card, array) {}

export { placeCardOnBattlefield, reduceEnergyOnDrop, removeCardFromHand };
