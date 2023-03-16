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

function capitalized(name) {
  const firstLetterBig = name.substring(0, 1).toLocaleUpperCase();
  const restSmall = name.substring(1).toLocaleLowerCase();
  return firstLetterBig + restSmall;
}
console.log(capitalized("gUSTAV"));

