export default function getInitialHand(state, setState) {
  const newDeck = [...state.deck];
  const draw = [];
  draw.push(newDeck.pop());
  draw.push(newDeck.pop());
  draw.push(newDeck.pop());
  setState((prev) => ({
    ...prev,
    hand: draw,
    deck: newDeck,
  }));
  console.log("selectors line 12:", draw, newDeck);
}
