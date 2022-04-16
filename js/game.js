import displayGame from "./displayGame.js";
import play from "./play.js";
import newCell from "./newCell.js";

export default function createGame(gameContainer, cellAmount) {
  // init game object
  let gameObject = [];

  // grid the game container
  gameContainer.classList.add("game");
  gameContainer.style.gridTemplateColumns = `repeat(${cellAmount}, 1fr)`;
  gameContainer.style.gridTemplateRows = `repeat(${cellAmount}, 1fr)`;
  // clear game container
  gameContainer.innerHTML = "";

  // create game object and fill game container
  for (let index1 = 0; index1 < cellAmount; index1++) {
    gameObject[index1] = [];
    for (let index2 = 0; index2 < cellAmount; index2++) {
      gameObject[index1][index2] = 0;

      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-row", index1);
      cell.setAttribute("data-col", index2);
      gameContainer.appendChild(cell);
    }
  }

  window.addEventListener("keydown", (e) => {
    if (
      e.key == "ArrowUp" ||
      e.key == "w" ||
      e.key == "ArrowDown" ||
      e.key == "s" ||
      e.key == "ArrowLeft" ||
      e.key == "a" ||
      e.key == "ArrowRight" ||
      e.key == "d"
    ) {
      console.log(gameObject);
      gameObject = play(e.key, gameContainer, gameObject);
      console.log(gameObject);
    }
    displayGame(gameContainer, gameObject);
  });

  // spawn starter cells
  gameObject = newCell(gameContainer, gameObject);
  gameObject = newCell(gameContainer, gameObject);

  // display game
  displayGame(gameContainer, gameObject);
}
