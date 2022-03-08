// updates the size of cells by containerSize and cellAmount
export function updateCellSize(containerSize, cellAmount) {
  let rootCss = document.querySelector(":root").style;
  rootCss.setProperty("--cell-size", String(containerSize / cellAmount) + "px");
}

// updates the size of game by containerSize
export function updateContainerSize(containerSize) {
  let rootCss = document.querySelector(":root").style;
  rootCss.setProperty("--game-size", String(containerSize) + "px");
}

// updates all css
export function updateAll(containerSize, cellAmount) {
  updateCellSize(containerSize, cellAmount);
  updateContainerSize(containerSize);
}
