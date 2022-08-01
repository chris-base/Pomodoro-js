let timerTime = 25;
let currTimerType = 0;
const themeColor1 = "#ff6257";

document.getElementById("timerTimeText").innerHTML = timerTime + ":00";

const pomodoroTypeChange = () => {
  document.getElementById("typePomo").style.backgroundColor = themeColor1;
  currTimerType = 0;
  document.getElementById("typeShort").style.backgroundColor = "transparent";
  document.getElementById("typeLong").style.backgroundColor = "transparent";

  timerTime = 25;
  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";
};

const shortTypeChange = () => {
  document.getElementById("typeShort").style.backgroundColor = themeColor1;
  currTimerType = 1;
  document.getElementById("typePomo").style.backgroundColor = "transparent";
  document.getElementById("typeLong").style.backgroundColor = "transparent";

  timerTime = 5;
  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";
};

const longTypeChange = () => {
  document.getElementById("typeLong").style.backgroundColor = themeColor1;
  currTimerType = 2;
  document.getElementById("typeShort").style.backgroundColor = "transparent";
  document.getElementById("typePomo").style.backgroundColor = "transparent";

  timerTime = 15;
  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";
};

document.getElementById("typePomo").addEventListener("click", function () {
  if (currTimerType !== 0) {
    pomodoroTypeChange();
  }
});

document.getElementById("typeShort").addEventListener("click", function () {
  if (currTimerType !== 1) {
    shortTypeChange();
  }
});

document.getElementById("typeLong").addEventListener("click", function () {
  if (currTimerType !== 2) {
    longTypeChange();
  }
});
