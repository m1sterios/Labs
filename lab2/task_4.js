"use strict";

const range = (start, end) => {
  if (typeof start === "number" && typeof end === "number") {
    let delta = end - start;
    let array = new Array(delta);
    if (delta < 0) return array;
    for (let i = 0; i <= delta; i++) {
      array[i] = delta + i;
    }
    return array;
  }
};

console.dir(range(15, 30));
