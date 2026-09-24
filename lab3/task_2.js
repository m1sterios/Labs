"use strict";

const generateKey = (length, possible) => {
  let result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = possible[Math.floor(Math.random() * Math.floor(length))];
  }
  return result.join("");
};

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key);
