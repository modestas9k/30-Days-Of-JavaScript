const fonts = [
  "Lato",
  "Montserrat",
  "Nunito",
  "Oswald",
  "Raleway",
  "Roboto",
  "Raleway Dots",
  "Aldrich",
];
const fontWeight = [300, 400, 500, 600, 700, 800, 900];

function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const sentence = "30 DAYS OF JAVASCRIPT CHALLENGE 2021";
const letters = sentence.split("");
const body = document.querySelector("body");

setInterval(() => {
  body.innerHTML = "";
  body.style.backgroundColor = randomColor();
  body.style.fontFamily = fonts[randomNumber(fonts)];
  body.style.fontWeight = fontWeight[randomNumber(fontWeight)];

  letters.map((letter) => {
    let span = document.createElement("span");
    span.innerHTML = letter;
    span.style.color = randomColor();
    span.className = "span";
    body.append(span);
  });
}, 2000);
