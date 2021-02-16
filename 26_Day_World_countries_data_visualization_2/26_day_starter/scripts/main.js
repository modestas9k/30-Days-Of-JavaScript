const countriesWrapper = document.querySelector(".countries-wrapper");

const countriesLength = document.querySelector("#countries-length");
countriesLength.innerHTML = countries.length;

const searchResult = document.querySelector("#search-result");
const searchResultType = document.querySelector("#search-type");
const searchResultKey = document.querySelector("#search-key");
const searchResultValue = document.querySelector("#search-value");

let startOrAny = false; // start = true, any = false;

/* search by any key */

function searchByAnyWord(sort = true) {
  let newArr = countries.filter((country) =>
    country.toLowerCase().match(input.value.toLowerCase())
  );
  newArr.forEach((country) => {
    let countryBox = document.createElement("div");
    countryBox.className = "country-box";
    let span = document.createElement("span");
    span.innerHTML = country;

    countryBox.append(span);
    if (sort) {
      countriesWrapper.append(countryBox);
    } else {
      countriesWrapper.prepend(countryBox);
    }
  });
  searchResultType.innerHTML = "contains";
  searchResultKey.innerHTML = input.value;
  searchResultValue.innerHTML = newArr.length;
  searchResult.hidden = false;
}

/* search by start */

function searchByStartWord(sort = true) {
  let newArr = countries.filter((country) =>
    country.toLowerCase().startsWith(input.value.toLowerCase())
  );
  newArr.forEach((country) => {
    let countryBox = document.createElement("div");
    countryBox.className = "country-box";

    let span = document.createElement("span");
    span.innerHTML = country;

    countryBox.append(span);
    if (sort) {
      countriesWrapper.append(countryBox);
    } else {
      countriesWrapper.prepend(countryBox);
    }
  });
  searchResultType.innerHTML = "starts with";
  searchResultKey.innerHTML = input.value;
  searchResultValue.innerHTML = newArr.length;
  searchResult.hidden = false;
}

/* input */

const input = document.querySelector("#search");
input.addEventListener("keyup", () => {
  countriesWrapper.innerHTML = "";
  if (!startOrAny) {
    searchByAnyWord();
  }
  if (startOrAny) {
    searchByStartWord();
  }
});

/* Buttons */

const startButton = document.querySelector("#btn-starting-word");
startButton.onclick = () => {
  countriesWrapper.innerHTML = "";
  startOrAny = true;
  searchByStartWord();
  startButton.className = "btn-active";
  anyButton.className = "";
};

const anyButton = document.querySelector("#btn-any-word");
anyButton.onclick = () => {
  countriesWrapper.innerHTML = "";
  startOrAny = false;
  searchByAnyWord();
  anyButton.className = "btn-active";
  startButton.className = "";
};

/* sort */

let isSortDefault = true;
const sort = document.querySelector("#btn-sort");
sort.innerHTML = isSortDefault ? "Sort A > B" : "Sort A < B";
sort.onclick = () => {
  if (!isSortDefault) {
    sort.innerHTML = "Sort A > B";
    isSortDefault = true;
    countriesWrapper.innerHTML = "";
    startOrAny
      ? searchByStartWord(isSortDefault)
      : searchByAnyWord(isSortDefault);
  } else {
    sort.innerHTML = "Sort A < B";
    isSortDefault = false;
    countriesWrapper.innerHTML = "";
    startOrAny
      ? searchByStartWord(isSortDefault)
      : searchByAnyWord(isSortDefault);
  }
};
