"use strict";

//sellecting classes
let Days = document.querySelector(".Days");
let Hours = document.querySelector(".Hours");
let Minutes = document.querySelector(".Minutes");
let seconds = document.querySelector(".seconds");
//sellecting dates

setInterval(function () {
  let hozir = new Date();
  let kun = hozir.getDate();
  let soat = hozir.getHours();
  let minut = hozir.getMinutes();
  let sekund = hozir.getSeconds();
  Days.textContent = kun;
  Hours.textContent = soat;
  Minutes.textContent = minut;
  seconds.textContent = sekund;
});
