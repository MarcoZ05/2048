export default function moveDown(gameObj) {
  let cellAmount = gameObj.length;

  let newGameObject = [];
  for (let i = 0; i < cellAmount; i++) {
    newGameObject[i] = [];
  }

  // combine cells if they are the same
  for (let index2 = cellAmount - 1; index2 >= 0; index2--) {
    let tempIndex1 = null;
    let newIndex1 = cellAmount - 1;
    for (let index1 = 0; index1 < cellAmount; index1++) {
      // for all cells in this row or column
      if (
        tempIndex1 != null &&
        gameObj[tempIndex1][index2] == gameObj[index1][index2]
      ) {
        // if cell is compatible, combine cells
        newGameObject[newIndex1][index2] = gameObj[tempIndex1][index2] * 2;
        tempIndex1 = null;
        newIndex1--;
      } else if (
        tempIndex1 != null &&
        (gameObj[index1][index2] != 0 || index1 + 1 == cellAmount)
      ) {
        // if cells are not compatible but there was one or it is the last one in this row/col
        newGameObject[newIndex1][index2] = gameObj[tempIndex1][index2];
        tempIndex1 = index1;
        newIndex1--;
      } else if (gameObj[index1][index2] != 0) {
        // if cell is not compatible but not empty
        tempIndex1 = index1;
        if (index1 + 1 == cellAmount) {
          newGameObject[newIndex1][index2] = gameObj[tempIndex1][index2];
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

  console.log(newGameObject);
  return newGameObject;
}
