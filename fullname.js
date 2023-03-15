"use strict";

function writeFullName(lastName, firstName, middleName) {
  if (middleName) {
    console.log("My name is " + firstName + " " + middleName + " " + lastName);
  } else {
    console.log("My name is " + firstName + " " + lastName);
  }
}
writeFullName("Lind", "Peter");