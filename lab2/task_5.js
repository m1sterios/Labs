"use strict";

const range = (start, end) => {
  if (typeof start === "number" && typeof end === "number") {
    let delta = end - start;
    let array = new Array();
    if (delta < 0) return array;
    for (let i = 0; i <= delta; i++) {
      const v = delta + i;
      if (v % 2 !== 0) array.push(v);
    }
    return array;
  }
};

console.dir(range(15, 30));
