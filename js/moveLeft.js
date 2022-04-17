export default function moveLeft(gameObj) {
  let cellAmount = gameObj.length;

  let newGameObject = [];
  for (let i = 0; i < cellAmount; i++) {
    newGameObject[i] = [];
  }

  // combine cells if they are the same
  for (let index1 = 0; index1 < cellAmount; index1++) {
    let tempIndex2 = null;
    let newIndex2 = 0;
    for (let index2 = 0; index2 < cellAmount; index2++) {
      // for all cells in this row or column
      if (
        tempIndex2 != null &&
        gameObj[index1][tempIndex2] == gameObj[index1][index2]
      ) {
        // if cell is compatible, combine cells
        newGameObject[index1][newIndex2] = gameObj[index1][tempIndex2] * 2;
        tempIndex2 = null;
        newIndex2++;
      } else if (
        tempIndex2 != null &&
        (gameObj[index1][index2] != 0 || index2 + 1 == cellAmount)
      ) {
        // if cells are not compatible but there was one or it is the last one in this row/col
        newGameObject[index1][newIndex2] = gameObj[index1][tempIndex2];
        tempIndex2 = index2;
        newIndex2++;
      } else if (gameObj[index1][index2] != 0) {
        // if cell is not compatible but not empty
        tempIndex2 = index2;
        if (index2 + 1 == cellAmount) {
          newGameObject[index1][newIndex2] = gameObj[index1][tempIndex2];
        }
      }
    }
  }

  for (let index1 = 0; index1 < gameObj.length; index1++) {
    for (let index2 = 0; index2 < gameObj[index1].length; index2++) {
      if (newGameObject[index1][index2] == null) {
        newGameObject[index1][index2] = 0;
      }
    }
  }

  return newGameObject;
}
