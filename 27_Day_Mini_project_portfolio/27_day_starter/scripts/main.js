/* title slider */

const titles = [
  ["🌱", "Educator"],
  ["💻", "Programmer"],
  ["🌐", "Developer"],
  ["🔥", "Motivator"],
  ["📔", "Content Creator"],
];

const titleSlider = document.querySelector("#title-slider");
const sliderIcon = document.querySelector("#slider-icon");
const sliderName = document.querySelector("#slider-name");
sliderIcon.innerHTML = titles[0][0];
sliderName.innerHTML = titles[0][1];

setInterval(() => {
  if (sliderName.innerHTML != titles[titles.length - 1][1]) {
    let findIndex = titles.findIndex((i) => i[1] == sliderName.innerHTML);
    sliderIcon.innerHTML = titles[findIndex + 1][0];
    sliderName.innerHTML = titles[findIndex + 1][1];
  } else {
    sliderIcon.innerHTML = titles[0][0];
    sliderName.innerHTML = titles[0][1];
  }
}, 2000);

/* colorful technologies */

const topics = [
  "Python",
  "Flask",
  "Numpy",
  "Pandas",
  "Statistics",
  "API",
  "MongoDB",
  "React",
  "React Router",
  "Redux",
  "Context API",
  "React Hooks",
  "MERN",
];

const techTeach = document.querySelector("#technologies-teach");
techTeach.innerHTML = topics[0];
techTeach.style.color = "#" + randomHexColor();

setInterval(() => {
  if (techTeach.innerHTML != topics[topics.length - 1]) {
    let findIndex = topics.findIndex((i) => i == techTeach.innerHTML);
    techTeach.innerHTML = topics[findIndex + 1];
    techTeach.style.color = "#" + randomHexColor();
  } else {
    techTeach.innerHTML = topics[0];
    techTeach.style.color = "#" + randomHexColor();
  }
}, 2000);

function randomHexColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
