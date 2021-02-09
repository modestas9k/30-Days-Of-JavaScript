//
//// Exercise 1
//

// 1. Create a closure which has one inner function.
//
function alertName() {
  const name = "Modestas";
  function displayName() {
    alert(name);
  }
  displayName();
}
// alertName();

// 2. Create a closure which has three inner functions.
//
const counter = () => {
  let privateCounter = 0;
  function changeBy(num) {
    privateCounter += num;
  }
  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    value: () => privateCounter,
  };
};

const counter1 = counter();
const counter2 = counter();

counter1.increment();
counter1.increment();
counter2.increment();
console.log(counter1.value()); // 2
console.log(counter2.value()); // 1
