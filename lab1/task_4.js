"use strict";

const test_case_1 = [true, true, false];
const test_case_2 = [1, true, "hello"];
const test_case_3 = [1, 2, true, false, "a", "b"];
const test_case_4 = [true, "hello", 5, 12, -200, false, false, "word"];

const countTypesInArray = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("not array!!!!");
    return;
  }
  const types_dict = {};
  for (const v of arr) {
    const type_str = typeof v;

    Object.hasOwn(types_dict, type_str) // check if this object has it
      ? types_dict[type_str]++ // if yes, add +1
      : (types_dict[type_str] = 1); // if not, set as 1, bcz this test needs non zero array counter (hello lua)
  }
  return types_dict;
};

console.dir(countTypesInArray(test_case_1));
console.dir(countTypesInArray(test_case_2));
console.dir(countTypesInArray(test_case_3));
console.dir(countTypesInArray(test_case_4));
