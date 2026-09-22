"use strict";

const phoneNumbers = {
  Oleg: "+380863517813",
  Vlad: "+380157734268",
  Grigori: "+380149104010",
  Bogdan: "+380190702401",
};

const findPhoneByName = (name) => {
  return phoneNumbers[name] || "Phone number for that name was not found";
};

console.log(findPhoneByName("Vlad")); // Found
console.log(findPhoneByName("Pavlo")); // Not found
