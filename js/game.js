import * as math from "./math.js";

export function buildGameContainer(parent, childArray, size) {
  // clear all childs from parent
  parent.innerHtml = "";
  childArray = [];
  for (let idIndex = 0; idIndex < size ** 2; idIndex++) {
    // creating a div element with id and class
    let child = document.createElement("div");
    child.setAttribute("class", "cell");
    child.setAttribute("id", idIndex);
    // append this div to parent
    parent.appendChild(child);
    // save child element in array
    childArray.push(parent.children[idIndex]);
  }
  return childArray;
}

export function start(gameArr) {
  gameArr = spawnCube(gameArr);
  gameArr = spawnCube(gameArr);
  return gameArr;
}

export function spawnCube(gameArr) {
  if (checkLose(gameArr)) {
    loseSequence();
    return;
  }

  while (true) {
    let randIndex = math.rand(0, gameArr.length - 1);
    if (gameArr[randIndex].getAttribute("value") == null) {
      gameArr[randIndex].setAttribute("value", 2);
      return gameArr;
    }
  }
}

export function checkLose(gameArr) {
  for (let i = 0; i < gameArr.length; i++) {
    if (gameArr[i].getAttribute("value") == null) {
      return false;
    }
  }
  return true;
}

export function loseSequence() {
  console.log("LOSE");
}

export function move(gameArr, key) {
  let gameSize = gameArr.length ** (1 / 2);
  let startId;
  let thisId;
  let nextId;
  let nextFreeId;
  let iSummand;
  let jSummand;
  let lastValue;
  let thisValue;
  let added = false;

  switch (key) {
    case "w":
      iSummand = -gameSize;
      jSummand = 1;
      startId = gameArr.length - gameSize;
      break;
    case "a":
      iSummand = -1;
      jSummand = gameSize;
      startId = gameSize - 1;
      break;
    case "s":
      iSummand = gameSize;
      jSummand = 1;
      startId = 0;
      break;
    case "d":
      iSummand = 1;
      jSummand = gameSize;
      startId = 0;

      break;
  }

  for (let j = 0; j < gameSize; j++) {
    for (let i = 0; i < gameSize; i++) {
      // wenn zusammenpassen
      // zusammenfügen
      // an rand machen wenn frei
      thisId = startId + i * iSummand + j * jSummand;
      console.log(thisId);

      if (gameArr[thisId].getAttribute("value") == null) {
        nextFreeId = thisId;
      }
    }
  }

  gameArr = spawnCube(gameArr);
  return gameArr;
}
