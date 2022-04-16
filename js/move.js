export function up(gameObj) {
  let newGameObject = [];
  let cellAmount = gameObj.length;

  // combine cells if they are the same
  for (let index2 = cellAmount - 1; index2 >= 0; index2--) {
    newGameObject[index2] = [];
    let tempIndex1 = null;
    for (let index1 = 0; index1 < cellAmount; index1++) {
      console.log(index1, index2, gameObj, tempIndex1, newGameObject);
      if (
        tempIndex1 != null &&
        gameObj[tempIndex1][index2] == gameObj[index1][index2]
      ) {
        newGameObject[tempIndex1][index2] = gameObj[tempIndex1][index2] * 2;
        tempIndex1 = null;
      } else if (gameObj[index1][index2] != 0) {
        tempIndex1 = index1;
      }
    }
  }

  console.log(newGameObject);

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

  console.log(newGameObject);

  for (let index1 = 0; index1 < gameObj.length; index1++) {
    for (let index2 = 0; index2 < gameObj[index1].length; index2++) {
      if (newGameObject[index1][index2] == 0) {
        newGameObject[index1][index2] = newGameObject[index1][index2] + 1;
      }
    }
  }
  return newGameObject;
}

export function down(gameObj) {}

export function left(gameObj) {}

export function right(gameObj) {}
