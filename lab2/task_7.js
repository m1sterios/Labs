"use strict";

const fn = () => {
  const obj1 = { name: "Jerry" };
  let obj2 = { name: "Jerry" };

  // Both changed names cuz const only apply to variable and not to all of the fields of an object
  obj1.name = "Steve";
  obj2.name = "Steve";

  console.log({ obj1, obj2 });
};

fn();
