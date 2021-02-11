/* Generate the keyboard code code using even listener.
 */
const body = document.querySelector("body");
body.style.margin = "0";
body.style.fontFamily = "Helvetica";

const app = document.querySelector("#app");
app.style.display = "flex";
app.style.flexDirection = "column";
app.style.height = "100vh";
app.style.textAlign = "center";
app.style.alignItems = "center";
app.style.justifyContent = "center";

const titleBox = document.createElement("div");
titleBox.style.padding = "20px 40px";
titleBox.style.borderRadius = "5px";
titleBox.style.boxShadow = "4px 8px 20px -2px #6e6e6e";

const title = document.createElement("span");
title.innerText = "Press any keyboard key";
title.style.fontSize = "34px";
titleBox.append(title);

const titleKey = document.createElement("span");
titleKey.innerText = "";
titleKey.style.marginLeft = "10px";
titleKey.style.fontSize = "34px";
titleKey.style.color = "green";
titleBox.append(titleKey);

const keyCode = document.createElement("h1");
keyCode.style.padding = "20px 40px";
keyCode.style.borderRadius = "5px";
keyCode.style.boxShadow = "4px 8px 20px -2px #6e6e6e";
keyCode.style.color = "green";
keyCode.style.fontWeight = "400";
keyCode.style.fontSize = "40px";

keyCode.hidden = true;

app.append(titleBox, keyCode);

addEventListener("keydown", (e) => {
  title.innerText = "You pressed";
  titleKey.innerText = e.code;
  keyCode.innerText = e.keyCode;
  keyCode.hidden = false;
});
