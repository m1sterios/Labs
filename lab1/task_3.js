"use strict";

const inc = (obj = 0) => {
  if (typeof obj === "object") {
    if (obj.n != null) obj.n++;
  }
};

const obj = { n: 5 };
inc(obj);

console.dir(obj);
