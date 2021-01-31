"use strict";

const arr = prompt("Enter date", "dd.mm.yyyy").split(".");

let monthIs,
    chYear = false,
    chDay = false,
    isLeap = null;

checkYear(arr[2]);
checkIsLeap(arr[2]);
checkMonth(arr[1]);
checkDay(arr[0]);

if (monthIs == null || !chYear || !chDay) {
    alert("Wrong date value");
} else {
    const date = new Date(arr[2], +arr[1] - 1, arr[0]);
    alert(date.toLocaleString('en', {
        weekday: 'long'
    }));
}

function checkIsLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                isLeap = true;
            } else {
                isLeap = false;
            }
        } else {
            isLeap = true;
        }
    } else {
        isLeap = false;
    }
}

function checkYear(year) {
    if (+year > 0 || +year < 3000) {
        chYear = true;
    }
}

function checkMonth(month) {
    if (isNaN(+month) || +month < 1 || +month > 12) {
        monthIs = null;
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        monthIs = "long";
    } else if (+month == 2) {
        monthIs = "feb";
    } else {
        monthIs = "short";
    }
}

function checkDay(day) {
    if (monthIs == "long") {
        if (+day > 0 && +day < 32) {
            chDay = true;
        }
    } else if (monthIs == "short") {
        if (+day > 0 && +day < 31) {
            chDay = true;
        }
    } else if (monthIs == "feb" && isLeap) {
        if (+day > 0 && +day < 30) {
            chDay = true;
        }
    } else if (monthIs == "feb" && !isLeap) {
        if (+day > 0 && +day < 29) {
            chDay = true;
        }
    }
}