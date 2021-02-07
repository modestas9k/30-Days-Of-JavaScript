console.log(countries);

//
//// Exercise 1
//

// 1.
//
// console.table(countries);

// 2.
//
// console.table(countries[0]);

// 3.
//
// console.group(countries);

//
//// Exercise 2
//

// 2.1 10 > 2 * 10 use console.assert()
//
// console.assert(10 > 2 * 10, "Not true"); // Assertion failed: Not true

// 2.2 Write a warning message using console.warn()
//
// console.warn("This is a warning");

// 2.3 Write an error message using console.error()
//
// console.error("This is an error message");

//
//// Exercise 3
//

// 3.1 Check the speed difference among the following loops:
// while, for, for of, forEach.
//
console.time("While loop");
let count = 0;
while (count < 15) {
  console.log(countries[count].name);
  count++;
}
console.timeEnd("While loop"); // While loop: 2ms - timer ended

console.time("for");
for (let i = 0; i < 15; i++) {
  console.log(countries[i].name);
}
console.timeEnd("for"); // for: 1ms - timer ended

console.time("for in");
for (const index in countries) {
  if (index < 15) {
    console.log(countries[index].name);
  }
}
console.timeEnd("for in"); // for of: 3ms - timer ended

console.time("forEach");
countries.forEach(({ name }, index) => {
  if (index < 15) {
    console.log(name);
  }
});
console.timeEnd("forEach"); // forEach: 2ms - timer ended
