// This is only called at the start of the game
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
    turn: 0,
    energy: 0,
  }));
}
// function getInitialLane(state, setState) {
//   const newLeftLane = [...state.leftLane];
//   const newMiddleLane = [...state.middleLane];
//   const newRightLane = [...state.rightLane];
//   draw.push(newDeck.pop());
//   draw.push(newDeck.pop());
//   draw.push(newDeck.pop());
//   setState((prev) => ({
//     ...prev,
//     hand: draw,
//     deck: newDeck,
//     turn: 0,
//     energy: 0,
//   }));
// }

function placeCardOnBattlefield(card, array) {
  array.push(card);
}

// This is called every time the "Next Turn" button is clicked
function nextTurn(state, setState) {
  if (state.deck.length > 0 && state.turn < 6) {
    const newDeck = [...state.deck];
    const draw = [...state.hand];
    draw.push(newDeck.pop());
    setState((prev) => ({
      ...prev,
      hand: draw,
      deck: newDeck,
      turn: prev.turn + 1,
      energy: prev.turn + 1,
    }));
  } else if (state.turn >= 0) {
    // this is where we'd call the final counts and stuff and determine the winner
    console.log("GAME OVER!");
  } else {
    setState((prev) => ({
      ...prev,
      turn: prev.turn + 1,
      energy: prev.turn + 1,
    }));
  }
}

export { getInitialHand, nextTurn };
