console.log(countries);

function searchByAnyWord(valueFromInput) {
  let newArr = countries.filter((country) => country.match(valueFromInput));
  console.log(newArr);
  newArr.forEach((country) => {
    let countryBox = document.createElement("div");
    countryBox.innerText = country;
    countriesWrapper.append(countryBox);
  });
}
function searchByStartWord(valueFromInput) {
  let regex = "/^ " + [valueFromInput] + ".*$/";
  console.log(regex);
  let newArr = countries.filter((country) => country.match(regex));
  newArr.forEach((country) => {
    let countryBox = document.createElement("div");
    countryBox.innerText = country;
    countriesWrapper.append(countryBox);
  });
}
let startOrAny = false; // start = true, any = false;

const countriesWrapper = document.querySelector(".countries-wrapper");

/* input */

const input = document.querySelector("#search");
input.addEventListener("keyup", () => {
  countriesWrapper.innerHTML = "";
  if (startOrAny) {
    searchByAnyWord(input.value);
    console.log("start");
  }
  if (!startOrAny) {
    searchByStartWord(input.value);
    console.log("any");
  }
});

/* Buttons */

const startButton = document.querySelector("#btn-starting-word");
startButton.onclick = () => {
  startOrAny = true;
};
const anyButton = document.querySelector("#btn-any-word");
anyButton.onclick = () => {
  startOrAny = false;
};
