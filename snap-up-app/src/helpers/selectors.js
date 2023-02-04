export function getInitialHand(state) {
  while (state.hand.length < 4) {
    const draw = state.deck.pop;
    state.hand.push(draw);
  }
}
