"use strict";

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const max = 9;
  const array = new Array(max);
  for (let i = 0; i <= max; i++) {
    array[i] = average(square(i), cube(i));
  }
  return array;
};

console.dir(calculate());
