"use strict";

const inc = (obj = 0) => {
  if (typeof obj === "object") {
    if (obj.n !== null) obj.n++;
  } else if (typeof obj === "number") {
    return ++obj;
  }
};

const a = 5;
const b = inc(a);
console.dir({ a, b });

const obj = { n: 5 };
inc(obj);

console.dir(obj);
