/* Exercise 2 */

const body = document.querySelector("body");
body.style.fontFamily = "Helvetica";
body.style.textAlign = "center";

const h1 = document.querySelector("h1");
h1.style.letterSpacing = "5px";
h1.style.marginBottom = "5px";
h1.style.textTransform = "uppercase";

const totalCountries = document.querySelector("#total-countries");
totalCountries.style.margin = "10px";
totalCountries.innerHTML = `Total Number of countries: ${countries.length}`;

const h6 = document.querySelectorAll("h6");
h6.forEach((i) => {
  i.style.margin = "5px";
  i.style.fontWeight = "400";
});

const countriesContainer = document.querySelector(".countries-container");
countriesContainer.style.maxWidth = "960px";
countriesContainer.style.margin = "0 auto";

const countriesWrapper = document.querySelector(".countries-wrapper");
countriesWrapper.style.display = "flex";
countriesWrapper.style.flexWrap = "wrap";
countriesWrapper.style.marginTop = "50px";

let countryBox;
countries.forEach((country) => {
  countryBox = document.createElement("div");
  countryBox.innerText = country;
  countryBox.style.textTransform = "uppercase";
  countryBox.style.boxShadow = "2px 2px 5px  #eee";
  countryBox.style.display = "flex";
  countryBox.style.justifyContent = "center";
  countryBox.style.alignItems = "center";
  countryBox.style.width = "100px";
  countryBox.style.height = "100px";
  countryBox.style.fontSize = "12px";

  countriesWrapper.appendChild(countryBox);
});
