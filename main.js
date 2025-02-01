function rockPaperScissor(player1, player2) {
  let result = ``;

  if (player1 == player2) {
    result = `Draw!`;
  } else if (player1 == "scissor" && player2 == "paper") { //semangat
>>>>>>> a9527c1 (Update file untuk setup project)
    result = `Player 1 Won!`;
  } else if (player1 == "paper" && player2 == "rock") {
    result = `Player 1 Won!`;
  } else if (player1 == "rock" && player2 == "scissor") {
    result = `Player 1 Won!`;
  } else {
    result = `Player 2 Won!`;
  }

  return result; // TODO: replace this
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
