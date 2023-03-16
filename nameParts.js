"use strict";

function writeNameParts(fullName) {
  const firstSpace = fullName.indexOf(" ");

  const lastSpace = fullName.lastIndexOf(" ");

  const middleName = capitalize(fullName.substring(firstSpace + 1, lastSpace));

  const firstName = capitalize(fullName.substring(0, firstSpace));

  const lastName = capitalize(fullName.substring(lastSpace + 1));

  if (middleName === lastSpace) {
    middleName = undefined;
  }

  return { firstName, middleName, lastName };
}

function capitalize(name) {
  return name.at(0).toUpperCase() + name.substring(1).toLowerCase();
}

const result = writeNameParts("GustAV WIese peDeRsen");
console.log(result);
