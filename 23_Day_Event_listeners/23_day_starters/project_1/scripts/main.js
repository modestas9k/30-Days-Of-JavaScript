/* Exercise 1 */

/* Generating numbers and marking evens, odds and prime numbers with
 * three different colors.
 */

/* Header */
const body = document.querySelector("body");
body.style.textAlign = "center";
body.style.fontFamily = "Helvetica";
body.style.boxSizing = "border-box";

const h1 = document.querySelector("h1");
h1.style.color = "#18b52f";
h1.style.marginBottom = "0";

const h2 = document.querySelector("h2");
h2.style.fontSize = "18px";
h2.style.margin = "5px";
h2.style.fontWeight = "400";

const h3 = document.querySelector("h3");
h3.style.fontSize = "14px";
h3.style.margin = "5px";
h3.style.fontWeight = "400";

/* input with button */

const formWrapper = document.createElement("div");
formWrapper.style.margin = "50px auto";
formWrapper.style.display = "flex";
formWrapper.style.justifyContent = "center";
formWrapper.style.alignItems = "start";

const inputBox = document.createElement("div");
inputBox.style.display = "column";

const input = document.createElement("input");
input.style.marginRight = "7px";
input.style.padding = "7px";
input.placeholder = "Generate more numbers...";
input.onkeypress = () => (errMessage.innerText = "");
inputBox.append(input);

const errMessage = document.createElement("p");
errMessage.style.color = "red";
errMessage.innerText = " ";
errMessage.style.fontSize = "12px";
errMessage.style.margin = "3px 2px";
errMessage.style.textAlign = "left";
inputBox.append(errMessage);

const button = document.createElement("button");
button.innerText = "Generate numbers";
button.style.background = "#18b52f";
button.style.padding = "10px";
button.style.border = "none";
button.style.color = "white";
button.onclick = () => {
  if (input.value == "") {
    errMessage.innerText = "Enter a number";
  }
  if (input.value != "" && isNaN(input.value)) {
    errMessage.innerText = "Input value must be a number";
  }
  if (input.value != "" && Number(input.value) > 0) {
    generateNumbers(input.value);
  }
};

formWrapper.append(inputBox, button);
const wrapper = document.querySelector(".wrapper");
wrapper.append(formWrapper);

/* Numbers table */

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

const numbersWrapper = document.createElement("div");
numbersWrapper.style.display = "flex";
numbersWrapper.style.flexWrap = "wrap";
numbersWrapper.style.justifyContent = "center";
numbersWrapper.style.marginTop = "30px";

function generateNumbers(num) {
  numbersWrapper.innerHTML = "";
  for (let i = 0; i < num; i++) {
    const numBox = document.createElement("div");
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
  wrapper.append(numbersWrapper);
}
