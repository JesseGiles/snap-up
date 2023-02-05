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

// const markAsDone = _id => {
//   const task = taskList.filter((task, i) => task.id === id);
//   task[0].status = 'done';
//   setTaskList(taskList.filter((task, i) => task._id !== id).concat(task[0]));
// };

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

export { getInitialHand, nextTurn, shuffle };
