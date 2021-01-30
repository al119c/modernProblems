"use stricr";

const arr = prompt("Enter date", "dd.mm.yyyy").split(".");
const date = new Date(arr[2], +arr[1] - 1, arr[0]);

alert(date.toLocaleString('en', {month: 'long'}));