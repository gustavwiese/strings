"use strict";

//const tekst = "GuStAV";

//const start = tekst.substring(0, 1).toLocaleUpperCase();
//const slut = tekst.substring(1).toLocaleLowerCase();
//
//const complete = start + slut;
//console.log(complete);

//function writeCapitalized(name) {
//  const firstLetterBig = name.substring(0, 1).toLocaleUpperCase();
//  const restSmall = name.substring(1).toLocaleLowerCase();
//  console.log(firstLetterBig + restSmall);
//}
//writeCapitalized("GuSTAv");

function capitalize(name) {
  return name.at(0).toUpperCase() + name.substring(1).toLowerCase();
}
console.log(capitalize("gUSTAV"));
