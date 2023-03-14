"use strict";

function writeNameParts(fullName) {
  const firstSpace = fullName.indexOf(" ");

  const lastSpace = fullName.lastIndexOf(" ");

  const myMiddleName = fullName.substring(firstSpace + 1, lastSpace);

  const myFirstName = fullName.substring(0, firstSpace);

  const myLastName = fullName.substring(lastSpace + 1);
  console.log(`First name: ${myFirstName} 
Middle name: ${myMiddleName} 
Last name: ${myLastName}`);
}

writeNameParts("Gustav Wiese Pedersen");
