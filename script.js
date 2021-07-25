const startbtn = document.querySelector("#start");
const resetbtn = document.querySelector("#reset");
let options = document.querySelector("select");

let mins, secs;

options.addEventListener("change", () => {
  minutes = parseInt(this.value);
  console.log(minutes);
});
