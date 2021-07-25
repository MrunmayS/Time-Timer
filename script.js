const startbtn = document.querySelector("#start");
const resetbtn = document.querySelector("#reset");
let options = document.querySelector("#setTime");

let minutes = 1;
let end,
  start,
  length,
  mins,
  secs,
  now,
  remainingTime,
  d,
  i,
  right,
  left,
  slice,
  isPause,
  audio;
let line = [];
isPause;

audio = new Audio("alarm_bird_clock.mp3");

options.addEventListener("change", function () {
  minutes = parseInt(this.value);
});

function Timer() {
  x = setInterval(function () {
    now = Date.now();
    remainingTime = end - now;
    mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    secs = Math.floor((remainingTime % (1000 * 60)) / 1000);

    d = 360 / length;
    i = length - remainingTime;
    right = -90 + d * i;
    left = -90 + d * i - 180;
    if (right < 90) {
      line = [
        "linear-gradient(" + right + "deg, #df2929 50%, transparent 50%)",
        "linear-gradient(-90deg, #ffffff 50%, transparent 50%)",
      ];
    }

    //rotates the blue, shows blue on both sides
    else {
      line = [
        "linear-gradient(" + left + "deg, #ffffff 50%, transparent 50%)",
        "linear-gradient(-90deg, #ffffff 50%, transparent 50%)",
      ];
    }

    //to update the class of the pie
    slice = $("#timer").css({
      "background-image": line.join(","),
    });
    if (mins < 0 || secs < 0) {
      clearInterval(x);
      audio.play();
      confetti.start();
    }
  }, 1000);
}
function reset() {
  clearInterval(x);
  slice = $("#timer").css({
    "background-image": "linear-gradient(-90deg, #df2929 50%, transparent 50%)",
  });
  isPause = NaN;
}

startbtn.addEventListener("click", function () {
  if (isNaN(isPause)) {
    start = Date.now();
    length = minutes * 60 * 1000;
    end = start + length;
    Timer();
  }
});

resetbtn.addEventListener("click", () => {
  reset();
  confetti.stop();
});
