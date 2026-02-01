// const isLeapYear = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;

// console.log(isLeapYear(2024));



function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return "Leap Year";
  }
   else {
    return "Not a Leap Year";
  }
}

console.log(isLeapYear(2024)); 