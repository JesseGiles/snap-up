// This is only called at the start of the game

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

export { shuffle };
