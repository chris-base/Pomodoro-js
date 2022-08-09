var runningInterval = null;
let timerTime = 25;
var distance = 0;
let currTimerType = 0;
let currFontType = 0;
const themeColor1 = "#ff6257";

document.getElementById("timerTimeText").innerHTML = timerTime + ":00";

const pomodoroTypeChange = () => {
  document.getElementById("typePomo").style.backgroundColor = themeColor1;
  currTimerType = 0;
  document.getElementById("typeShort").style.backgroundColor = "transparent";
  document.getElementById("typeLong").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

  timerTime = 25;
  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";
};

const shortTypeChange = () => {
  document.getElementById("typeShort").style.backgroundColor = themeColor1;
  currTimerType = 1;
  document.getElementById("typePomo").style.backgroundColor = "transparent";
  document.getElementById("typeLong").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

  timerTime = 1;
  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";
};

const longTypeChange = () => {
  document.getElementById("typeLong").style.backgroundColor = themeColor1;
  currTimerType = 2;
  document.getElementById("typeShort").style.backgroundColor = "transparent";
  document.getElementById("typePomo").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

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

document.getElementById("timerTimeText").addEventListener("click", function () {
  if (runningInterval) {
    document.getElementById("timerStartStopText").innerHTML = "Start";
    clearInterval(runningInterval);
    runningInterval = null;
  } else {
    document.getElementById("timerStartStopText").innerHTML = "Stop";

    var minToMilli = 60000 * timerTime;

    if (distance <= 0) {
      var countDownDate = new Date().getTime() + minToMilli;
    } else {
      var countDownDate = new Date().getTime() + distance;
    }

    runningInterval = setInterval(function () {
      var now = new Date().getTime();
      distance = countDownDate - now;

      console.log(distance);

      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (seconds < 10) {
        document.getElementById("timerTimeText").innerHTML = minutes + ":0" + seconds;
      } else {
        document.getElementById("timerTimeText").innerHTML = minutes + ":" + seconds;
      }

      if (distance < 0) {
        clearInterval(runningInterval);
        document.getElementById("timerTimeText").innerHTML = "0:00";
      }
    }, 1000);
  }
});

document.getElementById("settingsButtonContainer").addEventListener("click", function () {
  document.getElementById("settingsPageContainer").style.display = "flex";
});

document.getElementById("fontBoxOne").addEventListener("click", function () {
  if (currFontType !== 0) {
    currFontType = 0;

    document.getElementById("htmlId").style.fontFamily = "Roboto";

    document.getElementById("fontBoxOne").style.backgroundColor = "#141414"; // $almost-black
    document.getElementById("fontBoxOne").style.color = "#fafafa"; // $almost-white

    document.getElementById("fontBoxTwo").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxTwo").style.color = "#141414"; // $almost-white

    document.getElementById("fontBoxThree").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxThree").style.color = "#141414"; // $almost-white
  }
});

document.getElementById("fontBoxTwo").addEventListener("click", function () {
  if (currFontType !== 1) {
    currFontType = 1;

    document.getElementById("htmlId").style.fontFamily = "Montserrat";

    document.getElementById("fontBoxTwo").style.backgroundColor = "#141414"; // $almost-black
    document.getElementById("fontBoxTwo").style.color = "#fafafa"; // $almost-white

    document.getElementById("fontBoxOne").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxOne").style.color = "#141414"; // $almost-white

    document.getElementById("fontBoxThree").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxThree").style.color = "#141414"; // $almost-white
  }
});

document.getElementById("fontBoxThree").addEventListener("click", function () {
  if (currFontType !== 2) {
    currFontType = 2;

    document.getElementById("htmlId").style.fontFamily = "Fira Sans Condensed";

    document.getElementById("fontBoxThree").style.backgroundColor = "#141414"; // $almost-black
    document.getElementById("fontBoxThree").style.color = "#fafafa"; // $almost-white

    document.getElementById("fontBoxOne").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxOne").style.color = "#141414"; // $almost-white

    document.getElementById("fontBoxTwo").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxTwo").style.color = "#141414"; // $almost-white
  }
});
