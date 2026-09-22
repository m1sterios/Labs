"use strict";

const inc = (v = 0) => {
  if (typeof v === "number") {
    return ++v;
  }
};

const a = 5;
const b = inc(a);
console.dir({ a, b });
