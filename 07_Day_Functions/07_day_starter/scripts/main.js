// console.log(countries);

//
//// Exercise 1
//

// 1.
//
function fullName(fullName) {
  return fullName;
}
//console.log(fullName("Modestas Skirius"));

// 2.
//
function fullNameTwo(name, surname) {
  return name + " " + surname;
}
//console.log(fullNameTwo("Modestas", "Skirius"));

// 3.
//
function addNumbers(a, b) {
  return a + b;
}
//console.log(addNumbers(10, 5));

// 4.
//
function areaOfRectangle(length, width) {
  return length * width;
}
// console.log(areaOfRectangle(10, 4));

// 5.
//
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
// console.log(perimeterOfRectangle(10, 5));

// 6.
//
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
// console.log(volumeOfRectPrism(2, 3, 4));

// 7.
//
function areaOfCircle(r) {
  return 3.14 * r * r;
}
// console.log(areaOfCircle(2));

// 8.
//
function circumOfCircle(r) {
  return 2 * 3.14 * r;
}
// console.log(circumOfCircle(2));

// 9.
//
function density(mass, volume) {
  return mass / volume;
}
// console.log(density(9.8, 3));

// 10.
//
function calculateSpeed(distance, time) {
  let speed = distance / time;
  return speed.toFixed(2);
}
// console.log(calculateSpeed(100, 3));

// 11.
//
function calculateWeight(mass, gravity = 9.81) {
  const weight = mass * gravity;
  return weight.toFixed(2);
}
// console.log(calculateWeight(8));

// 12.
//
function convertCelsiusToFahrenheit(celsius) {
  const f = celsius * (9 / 5) + 32;
  return `Celsius: ${celsius} are in Fahrenheit: ${f}`;
}
// console.log(convertCelsiusToFahrenheit(3));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  bmi = Number(bmi.toFixed(2));

  if (bmi <= 18.5) {
    return `Underweight: ${bmi}`;
  } else if (bmi <= 24.9) {
    return `Normal weight: ${bmi}`;
  } else if (bmi <= 29.9) {
    return `Overweight: ${bmi}`;
  } else {
    return `Obese: ${bmi}`;
  }
}
// console.log(calculateBMI(180, 1.74));

// 14.
//
function checkSeason(month) {
  let word = month.slice(0, 1).toUpperCase() + month.slice(1).toLowerCase();
  if (word == "January" || word == "February" || word == "December") {
    return `${word} is in Winter season.`;
  } else if (word == "March" || word == "April" || word == "May") {
    return `${word} is in Spring season.`;
  } else if (word == "June" || word == "July" || word == "August") {
    return `${word} is in Summer season.`;
  } else if (word == "September" || word == "October" || word == "November") {
    return `${word} is in Autumn season.`;
  } else {
    return `${month} is not found.`;
  }
}
// console.log(checkSeason("january"));

// 15.
//
function findMax(a, b, c) {
  return Math.max(a, b, c);
}
// console.log(findMax(1, 4, 6));

//
//// Exercise 2
//

// 3.
//
function printArray(arr) {
  for (const item of arr) {
    console.log(item);
  }
}
// console.log(printArray(countries));

// 4. format: 01/31/2021 17:11
//
const addZero = (number) => {
  let num = number.toString();
  if (num.length == 1) {
    return "0" + number;
  } else if (num.length == 0) {
    return "00";
  } else {
    return number;
  }
};

function showDateTime() {
  const date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let format = `${addZero(month)}/${addZero(day)}/${year} ${addZero(
    hour
  )}:${addZero(minutes)}`;

  return format;
}
// console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.
//
function swapValues(x, y) {
  return ([x, y] = [y, x]);
}
// console.log(swapValues(2, 3));

// 6. return the reverse of the array (don't use method).
//
function revereArray(arr) {
  let newArr = [];
  for (const item of arr) {
    newArr.unshift(item);
  }
  return newArr;
}
// console.log(revereArray(countries));

// 7.
//
function capitalizeArray(arr) {
  return arr.map((item) => item.toUpperCase());
}
// console.log(capitalizeArray(countries));

// 8. Declare a function name addItem. It takes an item
// parameter and it returns an array after adding the item.
//
function addItem(item, arr) {
  let newArr = arr;
  newArr.push(item);
  return newArr;
}
// console.log(addItem("Banana", countries));

// 9. Declare a function name removeItem. It takes an index
// parameter and it returns an array after removing an item.
//
function removeItem(index, arr) {
  let newArr = arr;
  newArr.splice(index, 1);
  return newArr;
}
// console.log(removeItem(1, [1, 2, 3]));

// 10. It takes a number parameter and it adds all the numbers in that range.
//
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfNumbers(3));

// 11. It takes a number parameter and it adds all the odd numbers in that - range.
//
function sumOfOdds(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 != 0 || i == 1) {
      sum += i;
    }
  }
  return sum;
}
// console.log(sumOfOdds(5));

// 12. It takes a number parameter and it adds all the even numbers in that - range.
//
function sumOfEven(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
// console.log(sumOfEven(6));

// 13. It takes a positive integer as parameter and it counts number
// of evens and odds in the number.
//
function evensAndOdds(num) {
  let evens = 0;
  let odds = 0;
  if (num > 0) {
    for (let i = 0; i <= num; i++) {
      if (i % 2 != 0 || i == 1) {
        odds++;
      } else if (i % 2 == 0) {
        evens++;
      }
    }
  } else {
    return "Need more positivity :)";
  }
  return `The number of odds are ${odds}
The number of evens are ${evens}`;
}
// console.log(evensAndOdds(100));

// 14. Write a function which takes any number of arguments and
// return the sum of the arguments.
//
function sum(...arg) {
  let sum = 0;
  arg.map((item) => (sum += item));
  return sum;
}
// console.log(sum(1, 2, 3, 4));

// 15. Write a function which generates a randomUserIp.
//
function randomUserIp() {
  return `${Math.random()
    .toString()
    .substr(2, 2)}.${Math.random()
    .toString()
    .substr(2, 2)}.${Math.random()
    .toString(10)
    .substr(2, 3)}.${Math.random().toString(10).substr(2, 3)}`;
}
// console.log(randomUserIp()); // 25.92.524.112

// 16. Write a function which generates a randomMacAddress.
//
function randomMacAddress() {
  return `${Math.random().toString(16).substr(2, 2)}:${Math.random()
    .toString(16)
    .substr(2, 2)}:${Math.random()
    .toString(16)
    .substr(2, 2)}:${Math.random()
    .toString(16)
    .substr(2, 2)}:${Math.random()
    .toString(16)
    .substr(2, 2)}:${Math.random().toString(16).substr(2, 2)}`;
}
// console.log(randomMacAddress()); // 56:50:a6:7f:a2:b5

// 17.
//
function randomHexaNumberGenerator() {
  return `#${Math.random().toString(16).substr(2, 6)}`;
}
// console.log(randomHexaNumberGenerator());

// 18. When this function is called it generates seven character id.
//
function userIdGenerator() {
  return Math.random().toString(36).substr(2, 7).toUpperCase();
}
// console.log(userIdGenerator()); // G9NX4EA

//
//// Exercise 3
//

// 1. Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t
// take any parameter but it takes two inputs using prompt(). One of the input is the number
// of characters and the second input is the number of ids which are supposed to be generated.
//
function userIdGeneratedByUser() {
  let numOfChar = prompt("Enter Number of characters:");
  let numOfId = prompt("Enter Number of id's:");
  let newArr = [];
  for (let i = 0; i < numOfId; i++) {
    newArr.push(Math.random().toString(36).substr(2, numOfChar).toUpperCase());
  }
  return newArr;
}
// console.log(userIdGeneratedByUser()); // 4, 5 = [ "S1BZ", "HZ8V", "8NBU", "W2JC", "93OF" ]

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
//
function rgbColorGenerator() {
  let o = Math.round;
  let r = Math.random;
  let n = 255;
  return `rgb(${o(r() * n)},${o(r() * n)},${o(r() * n)})`;
}
// console.log(rgbColorGenerator()); // rgb(181,90,233)

// 3. Return any number of hexadecimal colors in an array.
//
function arrayOfHecaColors(num) {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(`#${Math.random().toString(16).substr(2, 6)}`);
  }
  return newArr;
}
// console.log(arrayOfHecaColors(2)); // [ "#86da21", "#2c19df" ]

// 4. Return any number of RGB colors in an array.
//
function arrayOfRgbColors(num) {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(rgbColorGenerator());
  }
  return newArr;
}
// console.log(arrayOfRgbColors(2)); // [ "rgb(40,80,89)", "rgb(35,81,162)" ]

// 5. Converts hexa color to rgb and it returns an rgb color.
//
function convertHexaToRgb(hex) {
  let rgb = [
    ("0x" + hex[1] + hex[2]) | 0,
    ("0x" + hex[3] + hex[4]) | 0,
    ("0x" + hex[5] + hex[6]) | 0,
  ];
  return `rgb(${rgb.toString(",")})`;
}
// console.log(convertHexaToRgb("#86da21")); // rgb(134, 218, 33);

// 6. converts rgb to hexa color.
//
function convertRgbToHex(color) {
  let colors = color.split(",");
  let red = Number(colors[0].match(/\d+/));
  let green = Number(colors[1]);
  let blue = Number(colors[2].match(/\d+/g));
  const rgb = (red << 16) | (green << 8) | (blue << 0);
  return "#" + (0x1000000 + rgb).toString(16).slice(1);
}
// console.log(convertRgbToHex("rgb(35, 81, 162)")); // #2351a2

// 7. Generate any number of hexa or rgb colors.
//
function generateColors(type, count) {
  let newArr = [];
  for (let i = 0; i < count; i++) {
    if (type === "hexa") {
      newArr.push(`#${Math.random().toString(16).substr(2, 6)}`);
    } else if (type === "rgb") {
      newArr.push(rgbColorGenerator());
    }
  }
  return newArr;
}
// console.log(generateColors("hexa", 2)); // [ "#e9d3c6", "#52e833" ]

// 8. Take an array as a parameter and return a shuffled array.
//
function shufflerArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// console.log(shufflerArray([1, 2, 3, 4])); // [ 2, 1, 4, 3 ]

// 10. It takes a parameter and it checks if it is empty or not.
//
function isEmpty(value) {
  if (value) {
    return true;
  } else {
    return false;
  }
}
// console.log(isEmpty("")); // false

// 12. Takes an array parameter and return the sum of all the items. Check if
// all the array items are number types. If not give return reasonable feedback.
//
function sumOfArrayItems(arr) {
  let sum = 0;
  let numArr = arr.filter((item) => typeof item == "number");

  if (arr.length === numArr.length) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  } else {
    return `${numArr.length} of ${arr.length} are numbers`;
  }
  return sum;
}
// console.log(sumOfArrayItems([1, 2, 3]));

// 13. Take an array parameter and returns the average of the items. Check if
// all the array items are number types. If not give return reasonable feedback.
//
function average(arr) {
  let sum = 0;
  let numArr = arr.filter((i) => typeof i == "number");

  if (arr.length === numArr.length) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  } else {
    return `${numArr.length} of ${arr.length} are numbers`;
  }
  return sum / arr.length;
}
// console.log(average([1, 2, 3, 4, 5])); // 3

// 14. Take array as parameter and modifies the fifth item of the array and return
// the array. If the array length is less than five it return 'item not found'.
//
function modifyArray(arr) {
  if (arr.length >= 5) {
    let newMod = arr;
    newMod[4] = newMod[4].toUpperCase();
    return newMod;
  } else {
    return "Not Found";
  }
}
// console.log(
//   modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
// ); // [ "Avocado", "Tomato", "Potato", "Mango", "LEMON", "Carrot" ]

// 15.
//
function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
// console.log(isPrime(11)); // true

// 16. Write a functions which checks if all items are unique in the array.
//
function checkIfAllUnique(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  if (arr.length == newArr.length) {
    return true;
  } else {
    return false;
  }
}
// console.log(checkIfAllUnique([1, 2, "2", false, 3, 5])); // true

// 17. Write a function which checks if all the items of the array are the same data type.
//
function checkIfAllItemsTypeSame(arr) {
  if (arr.length > 0) {
    return arr.every((item, index, arr) => typeof item === typeof arr[0]);
  } else {
    return "Array is empty";
  }
}
// console.log(checkIfAllItemsTypeSame([2, "2"])); // false

// 19. Write a function which returns array of seven random numbers in a range of 0-9.
// All the numbers must be unique.
//
function arrayOfRandomNumbers() {
  let newArr = [];
  let i = 0;
  while (i < 7) {
    let num = Math.floor(Math.random() * 9);
    if (!newArr.includes(num)) {
      newArr.push(num);
      i++;
    }
  }
  return newArr;
}
// console.log(arrayOfRandomNumbers()); // [ 6, 4, 8, 5, 3, 1, 2 ]

// 20. Write a function called reverseCountries, it takes countries array and first it copy the
// array and returns the reverse of the original array
//
function reverseCountries(arr) {
  let reversed = arr.reverse();
  return reversed;
}
// console.log(revereArray(countries));
