/* Develop a small application which calculate a weight of an object in a certain planet.
 */

const body = document.querySelector("body");
body.style.cssText = `
  font-family: Helvetica;
  margin: 0;
  text-align: center;
  background-image: url(./images/galaxy.gif);
`;

/* header > h1 */

const title = document.querySelector("h1");
title.style.cssText = `
  color: whiteSmoke;
  margin: 1em;
`;

/* header > input */

const input = document.querySelector("#mass");
input.style.cssText = `
  padding: 10px;
  border: none;
  border-radius: 2px;
`;

/* header > select */

const select = document.querySelector("select");
select.style.cssText = `
  padding: 10px;
  border: none;
  border-radius: 2px;
`;

const planetsArray = [
  { name: "mercury", weight: 0.378 },
  { name: "venus", weight: 0.907 },
  { name: "mars", weight: 0.377 },
  { name: "jupiter", weight: 2.364 },
  { name: "saturn", weight: 0.916 },
  { name: "uranus", weight: 0.889 },
  { name: "neptune", weight: 1.125 },
  { name: "pluto", weight: 0.067 },
  { name: "earth", weight: 1 },
  { name: "moon", weight: 0.166 },
];

planetsArray.forEach(({ name }) => {
  const option = document.createElement("option");
  option.value = name;
  option.innerText = name.toUpperCase();
  select.append(option);
});

/* header > button */

const button = document.querySelector("button");
button.style.cssText = `
  padding: 10px;
  border: none;
  border-radius: 2px;
  background: #9c9c9c;
  color: whiteSmoke;
  font-weight: 700
`;
button.onclick = () => {
  if (input.value == "" || isNaN(input.value)) {
    imageBox.hidden = true;
    description.innerHTML = "Mass is required";
    description.hidden = false;
  }
  if (!isNaN(input.value) && select.value == "none") {
    imageBox.hidden = true;
    description.innerHTML = "You did not choose a planet yet";
    description.hidden = false;
  }
  if (input.value !== "" && !isNaN(input.value) && select.value !== "none") {
    description.innerHTML = "";
    image.src = `./images/${select.value}.png`;
    result(input.value, select.value);
    imageBox.hidden = false;
    description.hidden = false;
  }
};

/* main > container */

const flexContainer = document.querySelector(".flex-container");
flexContainer.style.cssText = `
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  margin: 1em auto;
  padding: 3em 2em;
  background: rgba(194, 194, 194, 0.2);
`;

/* container > image box */

const imageBox = document.querySelector(".image");
imageBox.style.cssText = `
  max-width: 300px;
`;

const image = document.querySelector(".planet-image");
image.style.cssText = `
  max-width: 100%;
`;

/* container > description */

const description = document.querySelector(".description");
description.style.cssText = `
  background: rgba(194, 194, 194, 0.2);
  color: whiteSmoke;
  padding: 20px;
  margin-left: 10px;
  border-radius: 5px;
`;
description.hidden = true;

function calculateMass(num, planet) {
  let findPlanet = planetsArray.filter(({ name }) => name == planet);
  let sum = num * findPlanet[0].weight;
  return sum.toFixed(2);
}

function result(num, planet) {
  const h3 = document.createElement("h3");
  h3.innerText = `The weight of the object in ${planet.toUpperCase()}`;
  h3.style.fontWeight = "400";
  const circle = document.createElement("div");
  circle.style.cssText = `
    background: rgba(194, 194, 194, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 10px;
    width: 80px;
    height: 80px;
    margin: auto;
  `;
  const p = document.createElement("p");
  p.innerText = calculateMass(num, planet);
  p.style.fontWeight = "500";
  p.style.fontSize = "2em";

  circle.append(p);
  description.append(h3, circle);
}
