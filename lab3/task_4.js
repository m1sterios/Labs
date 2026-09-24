"use strict";

const methods = (iface) => {
  const functions = new Array();
  for (const name in iface) {
    const field = iface[name];
    if (typeof field === "function") {
      functions.push([name, field.length]);
    }
  }
  return functions;
};

console.log(
  methods({
    m1: (x) => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    },
  }),
);
