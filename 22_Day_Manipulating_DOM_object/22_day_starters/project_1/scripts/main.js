/* Exercise 1 */

/* 1. Create 100 to 100 numbers dynamically and append to the container div.
 */

const wrapper = document.querySelector(".wrapper");
wrapper.style.textAlign = "center";
wrapper.style.fontFamily = "Verdana";

const h1 = document.querySelector("h1");
h1.style.fontSize = "30px";

const h2 = document.querySelector("h2");
h2.style.fontSize = "20px";
h2.style.textDecoration = "underline";

const h3 = document.querySelector("h3");
h3.style.fontSize = "12px";
h3.style.textDecoration = "underline";

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

const numbersWrapper = document.querySelector("#numbersWrapper");
numbersWrapper.style.display = "flex";
numbersWrapper.style.flexWrap = "wrap";
numbersWrapper.style.justifyContent = "center";
numbersWrapper.style.marginTop = "30px";

let numBox;
for (let i = 0; i <= 100; i++) {
  numBox = document.createElement("div");
  numBox.style.background = "#eee";
  numBox.style.margin = "2px";
  numBox.style.width = "80px";
  numBox.style.padding = "15px 0";
  numBox.style.textJustify = "center";
  numBox.style.color = "whiteSmoke";
  numBox.style.fontWeight = "600";
  numBox.textContent = i;

  if (i % 2 === 0) {
    numBox.style.background = "#07ba3a";
  }
  if (i % 2 !== 0) {
    numBox.style.background = "#deca33";
  }
  if (isPrime(i)) {
    numBox.style.background = "#c90a0a";
  }

  numbersWrapper.appendChild(numBox);
}
