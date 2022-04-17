function lose() {
  alert("U LOSE");
}

export default function newCell(gameContainer, gameObject) {
  if (!gameObject.every((row) => row.every((cell) => cell.value != 0))) {
    lose();
    return;
  }

  let randIndex1 = Math.floor(Math.random() * gameObject.length);
  let randIndex2 = Math.floor(Math.random() * gameObject.length);

  while (gameObject[randIndex1][randIndex2] != 0) {
    let randIndex1 = Math.floor(Math.random() * gameObject.length);
    let randIndex2 = Math.floor(Math.random() * gameObject.length);
  }
  gameObject[randIndex1][randIndex2] = 2;

  let thisCell = gameContainer.querySelector(
    `[data-row="${randIndex1}"][data-col="${randIndex2}"]`
  );
  thisCell.dataset.value = 2;

  return gameObject;
}
