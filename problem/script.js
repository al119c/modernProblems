"use strict";

const num = prompt("Enter year", "from 1 to 2999");

function checkIsLeap(year) {
  if (year % 4 == 0) {
    alert(`${year} is a leap year`);
  } else {
    alert(`${year} is not a leap year`);
  }
}

if (num < 1 || num > 2999) {
  alert('Out of range');
} else {
  checkIsLeap(num);
}