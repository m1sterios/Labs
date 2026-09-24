"use strict";

const random = (min = 0, max = 0) => {
  if (max === 0) {
    max = min;
    min = 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// min and max
console.dir(random(0, 10));
// only max
console.dir(random(10));
