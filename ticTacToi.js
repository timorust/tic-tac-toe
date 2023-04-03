let board = document.getElementById("board");
let xTurn = true;
let counter = 0;
for (const child of board.children) {
  child.addEventListener("click", function () {
    fillBoard(child);
    if (counter >= 9) {
      alert("is game over");
      return;
    }
    let gameDone = isGameDone();
    if (gameDone !== "") {
      alert("Game is done => " + gameDone + " is the winner");
      counter = 9;
      return;
    }
  });
  console.log(child);
}

function fillBoard(el) {
  if (el.textContent !== "") {
    alert("You can't fill the board with a space!");
    return;
  }
  counter++;
  console.log(el);
  console.log(xTurn);
  if (xTurn) {
    el.textContent = "X";
  } else {
    el.textContent = "O";
  }
  xTurn = !xTurn;
}

// function isGameOver(marking) {
//   if (
//     board.children[0] == board.children[1] &&
//     board.children[1] == board.children[2] &&
//     board.children[0] == marking
//   ) {
//     return true;
//   }
//   if (
//     board.children[3] == board.children[4] &&
//     board.children[4] == board.children[5] &&
//     board.children[3] == marking
//   ) {
//     return true;
//   }
//   if (
//     board.children[6] == board.children[7] &&
//     board.children[7] == board.children[8] &&
//     board.children[6] == marking
//   ) {
//     return true;
//   }
//   if (
//     board.children[0] == board.children[4] &&
//     board.children[4] == board.children[8] &&
//     board.children[4] == marking
//   ) {
//     return true;
//   }
// }

// isGameOver("X");
// isGameOver("0");

// function isGameDone() {
//   let combinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   let markings = ["X", "O"];
//   for (let i = 0; i < markings.length; i++) {
//     let marking = markings[i];
//     for (let i = 0; i < combinations.length; i++) {
//       let combination = combinations[i];

//       if (
//         board.children[combination[0]].textContent ==
//           board.children[combination[1]].textContent &&
//         board.children[combination[0]].textContent ==
//           board.children[combination[2]].textContent &&
//         board.children[combination[0]].textContent == marking
//       ) {
//         return marking;
//       }
//     }
//   }
//   return "";
// }

function isGameDone() {
  let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < combinations.length; i++) {
    let combination = combinations[i];

    if (
      board.children[combination[0]].textContent ==
        board.children[combination[1]].textContent &&
      board.children[combination[0]].textContent ==
        board.children[combination[2]].textContent &&
      board.children[combination[0]].textContent !== ""
    ) {
      return board.children[combination[0]].textContent;
    }
  }
  return "";
}
