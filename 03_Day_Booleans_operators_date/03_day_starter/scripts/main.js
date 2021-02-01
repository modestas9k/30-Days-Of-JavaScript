// this is your main.js script

//
//// Exercise 1
//

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign
// value to it and use the typeof operator to check different data types.

const firstName = "Modestas";
const lastName = "Skirius";
const country = "Lithuania";
const age = 27;
const year = 2021;

// console.log(typeof firstName);
// console.log(typeof age);

// 2. Check if type of '10' is equal to 10.
//

// console.log("10" == 10);
// console.log("10" === 10);

// 3. Check if parseInt('9.8') is equal to 10.
//

// console.log(parseInt("9.8") == 10);
// console.log(parseInt("9.8") === 10);

// 4 Boolean value is either true or false.
//

// truthy values:
// let one = 1;
// let two = true;
// let three = "true";

// falsy values
// let falseOne = 0;
// let falseTwo = "";
// let falseThree = false;

// 5. Figure out the result of the following comparison expression.
//

// 1.true , 2.true , 3.false , 4.false , 5.true , 6.true , 7.false , 8.false ,
// 9.false , 10.true , 11.false
// console.log("python".length > "jargon".length);

// 6. Figure out the result of the following expressions.
//

// 1.true , 2.false , 3.true , 4.true , 5.false , 6.true 7.true , 8.false ,
// 9.true , 10.true
// 11.
//const noOn = !("dragon".includes("on") && "python".includes("on"));

// 7. Use the Date object to do the following activities.
//

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth() + 1;
// const day = date.getDate();
// const weekDay = date.getDay();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const numberOfSeconds = date.getTime();

//
//// Exercise 2
//

// 1. Write a script that prompt the user to enter base and height of
// the triangle and calculate an area of a triangle (area = 0.5 x b x h).

function areaOfTriangle(base, height) {
  return (base * height) / 2;
}
//console.log(areaOfTriangle(20, 10));

// 2. Write a script that prompt the user to enter side a, side b, and
// side c of the triangle and and calculate the perimeter of triangle
// (perimeter = a + b + c).

function perimeterOfTriangle(a, b, c) {
  return a + b + c;
}
// console.log(perimeterOfTriangle(5, 4, 3));

// 3. Get length and width using prompt and calculate an area of rectangle.
//

function perimeterOfRectangle(length, width) {
  const perimeter = 2 * (length + width);
  const area = length * width;
  return console.log({ area, perimeter });
}
// console.log(perimeterOfRectangle(20, 10));

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r)
// and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

function areaOfCircle(myRadius) {
  return 3.14 * myRadius * myRadius;
}
function circumferenceOfCircle(myRadius) {
  return 2 * 3.14 * myRadius;
}

// const myRadius = Number(prompt("Enter the radius of your circle"));
// console.log(circumferenceOfCircle(myRadius));
// console.log(areaOfCircle(myRadius));

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
//

function slope(x) {
  return 2 * x - 2;
}

// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2)
// and point(6,10)

function findSlope(x, y) {
  return (2 * y - y) / (2 * x - x);
}

// 9. Writ a script that prompt a user to enter hours and rate per hour.
// Calculate pay of the person?

function weeklyEarning() {
  let userPrompt = prompt("enter weekly work hours and rate:");
  userPrompt = userPrompt.split(" ");
  let hours = Number(userPrompt[0]);
  let rate = Number(userPrompt[1]);
  console.log(hours * rate);
}
//weeklyEarning();

// 10. If the length of your name is greater than 7 say, your name is
// long else say your name is short.

function nameLength(name) {
  if (name.length > 7) {
    return console.log("Name is to long");
  } else if (name.length < 7) {
    return console.log("Your name is to short");
  } else {
    return;
  }
}
// let namePrompt = prompt("Check your name length:");
// nameLength(namePrompt);

// 11. Compare your first name length and your family name length
// and you should get this output.

function compareNameLength(firstName, lastName) {
  let isFirstNameLonger =
    firstName.length > lastName.length ? "is longer" : "is shorter";
  let sentence = `Your first name, ${firstName} ${isFirstNameLonger} than your family name, ${lastName}`;
  return console.log(sentence);
}
// compareNameLength("Modestas", "Skirius");

// 12. Declare two variables myAge and yourAge and assign them
// initial values and myAge and yourAge.

function olderThanYou(myAge, yourAge) {
  return console.log(`I am ${myAge - yourAge} years older than you.`);
}
// olderThanYou(2, 21);

// 13. Using prompt get the year the user was born and if the
// user is 18 or above allow the user to drive if not
// tell the user to wait a certain amount of years.

function checkUserDate(userDate) {
  const date = new Date();
  let userYear = date.getFullYear() - userDate;

  if (userYear >= 18) {
    return console.log(`You are ${userYear}. You are old enough to drive`);
  } else {
    return console.log(
      `You are ${userYear}. You will be allowed to drive after ${
        18 - userYear
      } years.`
    );
  }
}
// let userDatePrompt = Number(prompt("enter year of born"));
// checkUserDate(userDatePrompt);

// 14. Calculate the number of seconds a person can live.
//

function ageToSeconds(age) {
  let date = new Date();
  let yearOfBorn = date.getFullYear() - age;
  let dateOfBornInSeconds = date.getTime() - new Date(yearOfBorn, 0).getTime();
  let sentence = `You lived ${dateOfBornInSeconds} seconds.`;
  return console.log(sentence, dateOfBornInSeconds);
}
// let userAgePrompt = Number(prompt("Enter your age:"));
// ageToSeconds(userAgePrompt);

// 15. Create a human readable time format using the Date time object.
//

function humanReadableTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
  console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
  console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
}
// humanReadableTime();

//
//// Exercise 3
//

// 1. Create a human readable time format using the Date time object.
// The hour and the minute should be all the time two digits.

function perfectTimeFormat() {
  const now = new Date();
  const year = now.getFullYear();

  let month = now.getMonth() + 1;
  month = month.toString().length < 2 ? "0" + month : month;

  let date = now.getDate();
  date = date.toString().length < 2 ? "0" + date : date;

  let hours = now.getHours();
  hours = hours.toString().length < 2 ? "0" + hours : hours;

  let minutes = now.getMinutes();
  minutes = minutes.toString().length < 2 ? "0" + minutes : minutes;

  let fullDate = `${year}-${month}-${date} ${hours}:${minutes}`;
  return console.log(fullDate);
}
// perfectTimeFormat();
