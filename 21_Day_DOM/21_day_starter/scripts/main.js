/* Exercise 1 */

/* 4. Loop through the nodeList and get the text content of each paragraph.
 */
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p) => console.log(p.innerText));

/* 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph.
 */
// allParagraphs[3].innerText = "Fourth Paragraph";
// console.log(allParagraphs[3].innerText);

/* 6. Set id and class attribute for all the paragraphs using different
 * attribute setting methods.
 */
allParagraphs.forEach((p, index) => {
  p.classList = "py";
  p.id = `pi${[index]}`;
});
allParagraphs.forEach((p, index) => {
  p.setAttribute("class", "pi");
  p.setAttribute("id", `pyp${[index]}`);
});
// console.log(allParagraphs);

/* Exercise 2 */

/* 2.1 Change stye of each paragraph using JavaScript(eg. color, background,
 * border, font-size, font-family).
 */
allParagraphs.forEach((p) => {
  p.style.color = "#aaa";
  p.style.background = "whiteSmoke";
  p.style.border = "1px solid #aaa";
  p.style.padding = "10px";
  p.style.fontFamily = "Helvetica";
  p.style.fontSize = "14px";
});

/* 2.2 Select all paragraphs and loop through each elements and give the first
 * and third paragraph a color of green, and the second and the fourth
 * paragraph a red color.
 */
allParagraphs.forEach((p, index) => {
  if (index % 2 === 0) {
    p.style.color = "green";
  } else {
    p.style.color = "red";
  }
});

/* Exercise 3 */

/* 3.1 Apply all the styles and functionality using JavaScript only:
 * The year color is changing every 1 second
 * The date and time background color is changing every on seconds
 * Completed challenge has background green
 * Ongoing challenge has background yellow
 * Coming challenges have background red
 */

const wrapper = document.querySelector(".wrapper");
wrapper.style.textAlign = "center";
wrapper.style.margin = "3em";
wrapper.style.fontFamily = "Helvetica";

const h1 = document.querySelector("h1");
h1.style.fontSize = "24px";

const h1Year = document.querySelector("#year");
h1Year.style.fontSize = "40px";
h1Year.style.color = "#6a0887";
h1Year.style.fontWeight = "500";

const h2 = document.querySelector("h2");
h2.style.textDecoration = "underline";
h2.style.fontSize = "18px";

const ul = document.querySelector("ul");
ul.style.textAlign = "left";
ul.style.margin = "0 auto";
ul.style.padding = "0";
ul.style.listStyleType = "none";

const allLi = document.querySelectorAll("li");
allLi.forEach((li) => {
  li.style.padding = "10px";
  li.style.background = "#f06532";
  li.style.marginBottom = "3px";
  li.style.fontSize = "14px";
});
allLi[0].style.background = "#32f0a1";
allLi[1].style.background = "#edf032";

const counter = document.querySelector("#counter");
counter.innerHTML = "February 10, 2021";
counter.style.padding = "10px";
counter.style.margin = "20px";
counter.style.background = "green";
counter.style.display = "inline-block";

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChanger = setInterval(() => {
  counter.style.background = randomHexColor();
  h1Year.style.color = randomHexColor();
}, 1000);

function minTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}
const time = setInterval(() => {
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const day = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  counter.innerText =
    month +
    " " +
    minTwoDigits(day) +
    ", " +
    year +
    " " +
    minTwoDigits(hour) +
    ":" +
    minTwoDigits(minutes) +
    ":" +
    minTwoDigits(seconds);
}, 1000);
