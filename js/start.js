export default function start(obj, objSize) {
  let arr = [[], []];
  let elem = document.createElement("div").setAttribute("class", "cube");
  for (let i = 0; i < objSize - 1; i++) {
    for (let j = 0; j < objSize - 1; j++) {
      obj.push(elem.setAttribute("id", i + "-" + j));
      console.log("w");
    }
  }
}
