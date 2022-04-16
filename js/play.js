import * as move from "./move.js";

export default function play(key, gameContainer, gameObj) {
  let newGameObject = [];

  switch (key) {
    case "ArrowUp":
      newGameObject = move.up(gameObj);
      break;
    case "w":
      newGameObject = move.up(gameObj);
      break;
    case "ArrowDown":
      newGameObject = move.down(gameObj);
      break;
    case "s":
      newGameObject = move.down(gameObj);
      break;
    case "ArrowLeft":
      newGameObject = move.left(gameObj);
      break;
    case "a":
      newGameObject = move.left(gameObj);
      break;
    case "ArrowRight":
      newGameObject = move.right(gameObj);
      break;
    case "d":
      newGameObject = move.right(gameObj);
      break;
    default:
      return;
  }
  return newGameObject;
}
