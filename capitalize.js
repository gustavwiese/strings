"use strict";

const tekst = "GuStAV";

const start = tekst.substring(0, 1).toLocaleUpperCase();
const slut = tekst.substring(1).toLocaleLowerCase();

const complete = start + slut;
console.log(complete);
