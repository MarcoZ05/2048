export function up(gameObj) {
  let newGameObject = [];
  let cellAmount = gameObj.length;

  // combine cells if they are the same
  for (let index2 = cellAmount - 1; index2 >= 0; index2--) {
    newGameObject[index2] = [];
    let tempIndex1 = null;
    for (let index1 = 0; index1 < cellAmount; index1++) {
      // for all cells in this row or column
      if (
        tempIndex1 != null &&
        gameObj[tempIndex1][index2] == gameObj[index1][index2]
      ) {
        // if cell is compatible, combine cells
        newGameObject[tempIndex1].push(gameObj[tempIndex1][index2] * 2);
        tempIndex1 = null;
      } else if (gameObj[index1][index2] != 0) {
        // if cell is not compatible but not empty, set tempIndex1 to index1
        tempIndex1 = index1;
      }
    }
  }

  console.log(gameObj);

  // move cells up
  for (let index2 = cellAmount - 1; index2 >= 0; index2--) {
    newGameObject[index2] = [];
    let tempIndex1 = null;
    for (let index1 = cellAmount - 1; index1 >= 0; index1--) {
      if (gameObj[index1][index2] == 0) {
        tempIndex1 = index1;
      } else if (tempIndex1 != null) {
        newGameObject[tempIndex1][index2] = gameObj[index1][index2];
        tempIndex1 = null;
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

export function down(gameObj) {
  let newGameObject = [];
  let cellAmount = gameObj.length;

  // combine cells if they are the same
  // for (let index2 = cellAmount - 1; index2 >= 0; index2--) {
  //   for (let index1 = 0; index1 < cellAmount; index1++) {}
  // }
}

export function left(gameObj) {
  let newGameObject = [];
  let cellAmount = gameObj.length;

  // combine cells if they are the same
  // for (let index1 = 0; index1 < cellAmount; index1++) {
  //   for (let index2 = 0; index2 < cellAmount; index2++) {}
  // }
}

export function right(gameObj) {
  let newGameObject = [];
  let cellAmount = gameObj.length;

  // combine cells if they are the same
  // for (let index1 = 0; index1 < cellAmount; index1++) {
  //   for (let index2 = 0; index2 < cellAmount; index2++) {}
  // }
}
