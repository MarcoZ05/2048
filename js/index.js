// import all data
import * as CSS from "./css.js";
import * as game from "./game.js";
// main hmtl elements
const gameContainer = document.getElementById("game-container");
let gameChilds = [];
// size of gameContainer
let gameContainerSizeCss = 800;
// number of cols/rows
let gameContainerCellAmount = 4;

gameChilds = game.buildGameContainer(
  gameContainer,
  gameChilds,
  gameContainerCellAmount
);

CSS.updateAll(gameContainerSizeCss, gameContainerCellAmount);
gameChilds = game.start(gameChilds);

document.body.addEventListener("keydown", (e) => {
  console.log(e.key);
  let key = e.key.toLowerCase();
  if (key == "w" || key == "a" || key == "s" || key == "d") {
      game.move(gameChilds, key)
  }
});
