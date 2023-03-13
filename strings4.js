"use strict";

const tekst = "My name is Gustav";

const start = tekst.lastIndexOf(" ");
const slut = tekst.length;

const myName = tekst.substring(start + 1, slut);

console.log(myName);
