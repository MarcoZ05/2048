export default function displayGame(gameContainer, gameObject) {
  for (let i = 0; i < gameObject.length; i++) {
    for (let j = 0; j < gameObject[i].length; j++) {
      let cell = gameContainer.querySelector(
        `[data-row="${i}"][data-col="${j}"]`
      );
      if (gameObject[i][j] != 0) {
        cell.dataset.value = gameObject[i][j];
        cell.innerHTML = gameObject[i][j];
      } else {
        delete cell.dataset.value;
        cell.innerHTML = "";
      }
    }
  }
}
