// this is your main.js script

//
//// Exercises 1
//

// 1.
//

function oldEnough(age) {
  if (age >= 18) {
    return console.log("You are old enough to drive.");
  } else {
    return console.log(`You are left with ${18 - age} years to drive`);
  }
}
// let userPrompt = Number(prompt("Enter your age:"));
// oldEnough(userPrompt);

// 2.
//

function whoseOlder(age) {
  if (age >= 27) {
    return console.log(`You are older ${age - 27} year than me.`);
  } else {
    return console.log(`You are ${27 - age} years than me.`);
  }
}
// let userPrompt = Number(prompt("Enter your age:"));
// whoseOlder(userPrompt);

// 3.
//

function greaterThan(a, b) {
  let answer = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
  return console.log(answer);
}
// greaterThan(4, 3);

// 4.
//

function isNumberEven(number) {
  let answer =
    number % 2 === 0
      ? `${number} is an even number`
      : `${number} is an odd number`;
  return console.log(answer);
}
// isNumberEven(11);

//
//// Exercise 2
//

// 1. Write a code which can give grades to students according to theirs scores.
//

function scoresToGrades(score) {
  if (score >= 80 && score <= 100) {
    return console.log("A");
  } else if (score >= 70 && score <= 89) {
    return console.log("B");
  } else if (score >= 60 && score <= 69) {
    return console.log("C");
  } else if (score >= 50 && score <= 59) {
    return console.log("D");
  } else if (score >= 0 && score <= 49) {
    return console.log("F");
  } else {
    return console.log("Score was not right");
  }
}
// scoresToGrades(6);

// 2. Check if the season is Autumn, Winter, Spring or Summer.
//

function monthToSeason(month) {
  if (month === "September" || month === "October" || month === "November") {
    return console.log("Autumn");
  } else if (
    month === "December" ||
    month === "January" ||
    month === "February"
  ) {
    return console.log("Winter ");
  } else if (month === "June" || month === "August" || month === "July") {
    return console.log("summer");
  } else {
    return console.log("Month not found");
  }
}
//monthToSeason("September");

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
//

function isWorkDay(day) {
  if (day === "Saturday" || day === "Sunday") {
    return console.log(`${day} is a weekend day.`);
  } else if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    return console.log(`${day} is a working day.`);
  }
}
//isWorkDay("Saturday");

//
//// Exercise 3
//

// 1. Write a program which tells the number of days in a month.
//

function daysInMonth(month) {
  let m = month.toLowerCase();
  m = m[0].toUpperCase() + m.slice(1);
  if (
    m === "January" ||
    m === "March" ||
    m === "August" ||
    m === "December" ||
    m === "May"
  ) {
    return console.log(`${m} has 31 days.`);
  } else if (
    m === "April" ||
    m === "July" ||
    m === "June" ||
    m === "November" ||
    m === "September"
  ) {
    return console.log(`${m} has 30 days.`);
  } else if (m === "February") {
    return console.log(`${m} has 28 days (27 in leap years)`);
  } else {
    return console.log(`${m} does not exist`);
  }
}
//daysInMonth("june");
