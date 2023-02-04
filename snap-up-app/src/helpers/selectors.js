function getInitialHand(state, setState) {
  const newDeck = [...state.deck];
  const draw = [];
  draw.push(newDeck.pop());
  draw.push(newDeck.pop());
  draw.push(newDeck.pop());
  setState((prev) => ({
    ...prev,
    hand: draw,
    deck: newDeck,
    turn: 1,
    energy: 1
  }));
  console.log("selectors line 14:", draw, newDeck);
};

function nextTurn(state, setState) {
  console.log("selectors line 18: deck is", state.deck.length, "cards long.");
  if (state.deck.length > 0) {
    console.log('selectors line 19 state is:', state)
    const newDeck = [...state.deck];
    const draw = [...state.hand];
    draw.push(newDeck.pop());
    console.log("selectors line 23:", draw, newDeck);
    setState((prev) => ({
      ...prev,
      hand: draw,
      deck: newDeck,
      turn: prev.turn + 1,
      energy: prev.turn + 1
    }));
    console.log("selectors line 31:", draw, newDeck);
  } else if (state.turn === 6) {
    console.log("GAME OVER!")
  } else {
      console.log('selectors line 33 state is:', state)
      setState((prev) => ({
        ...prev,
        turn: prev.turn + 1,
        energy: prev.turn + 1
      }));
  }
};

export {getInitialHand, nextTurn}