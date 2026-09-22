"use strict";

const phoneNumbers = [
  { name: "Oleg", phone: "+380863517813" },
  { name: "Vlad", phone: "+380157734268" },
  { name: "Grigori", phone: "+380149104010" },
  { name: "Bogdan", phone: "+380190702401" },
];

const findPhoneByName = (name) => {
  let found = true;
  for (const phone of phoneNumbers) {
    if (phone.name === name) {
      return phone.phone;
    } else {
      found = false;
    }
  }
  if (!found) {
    return "Phone number for that name was not found"; // exception would be better but meh, good enough for lab task
  }
};

console.log(findPhoneByName("Vlad")); // Found
console.log(findPhoneByName("Pavlo")); // Not found
