"use strict";

//function writeFullName(lastName, firstName, middleName) {
//  if (middleName) {
//    console.log("My name is " + firstName + " " + middleName + " " + lastName);
//  } else {
//    console.log("My name is " + firstName + " " + lastName);
//  }
//}
//writeFullName("Lind", "Peter");

function getFullName(lastName, firstName, middleName) {
  if (middleName) {
    return "My name is " + firstName + " " + middleName + " " + lastName;
  } else {
    return "My name is " + firstName + " " + lastName;
  }
}
console.log(getFullName("Lind", "Peter", "Percival Wulfric Brian"));

