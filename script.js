var runningInterval = null;
let timerTime = 25;
let timesArray = [25, 5, 10];
var distance = 0;
let currTimerTypeNum = 0;
let currFontTypeNum = 0;
let currColorTypeNum = "theme0";

const themeColors = { theme0: ["#ff6257"], theme1: ["#4530ff"], theme2: ["#e724eb"] };

document.getElementById("timerTimeText").innerHTML = timerTime + ":00";

const pomodoroTypeChange = () => {
  document.getElementById("typePomo").style.backgroundColor = themeColors[currColorTypeNum];
  currTimerTypeNum = 0;
  document.getElementById("typeShort").style.backgroundColor = "transparent";
  document.getElementById("typeLong").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

  timerTime = timesArray[0];
  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";
};

const shortTypeChange = () => {
  document.getElementById("typeShort").style.backgroundColor = themeColors[currColorTypeNum];
  currTimerTypeNum = 1;
  document.getElementById("typePomo").style.backgroundColor = "transparent";
  document.getElementById("typeLong").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

  timerTime = timesArray[1];
  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";
};

const longTypeChange = () => {
  document.getElementById("typeLong").style.backgroundColor = themeColors[currColorTypeNum];
  currTimerTypeNum = 2;
  document.getElementById("typeShort").style.backgroundColor = "transparent";
  document.getElementById("typePomo").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

  timerTime = timesArray[2];
  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";
};

document.getElementById("typePomo").addEventListener("click", function () {
  if (currTimerTypeNum !== 0) {
    pomodoroTypeChange();
  }
});

document.getElementById("typeShort").addEventListener("click", function () {
  if (currTimerTypeNum !== 1) {
    shortTypeChange();
  }
});

document.getElementById("typeLong").addEventListener("click", function () {
  if (currTimerTypeNum !== 2) {
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

document.getElementById("settingsHeaderCloseButton").addEventListener("click", function () {
  document.getElementById("settingsPageContainer").style.display = "none";
});

// Settings font picker

document.getElementById("fontBoxOne").addEventListener("click", function () {
  if (currFontTypeNum !== 0) {
    currFontTypeNum = 0;

    document.getElementById("fontBoxOne").style.backgroundColor = "#141414"; // $almost-black
    document.getElementById("fontBoxOne").style.color = "#fafafa"; // $almost-white

    document.getElementById("fontBoxTwo").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxTwo").style.color = "#141414"; // $almost-white

    document.getElementById("fontBoxThree").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxThree").style.color = "#141414"; // $almost-white
  }
});

document.getElementById("fontBoxTwo").addEventListener("click", function () {
  if (currFontTypeNum !== 1) {
    currFontTypeNum = 1;

    document.getElementById("fontBoxTwo").style.backgroundColor = "#141414"; // $almost-black
    document.getElementById("fontBoxTwo").style.color = "#fafafa"; // $almost-white

    document.getElementById("fontBoxOne").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxOne").style.color = "#141414"; // $almost-white

    document.getElementById("fontBoxThree").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxThree").style.color = "#141414"; // $almost-white
  }
});

document.getElementById("fontBoxThree").addEventListener("click", function () {
  if (currFontTypeNum !== 2) {
    currFontTypeNum = 2;

    document.getElementById("fontBoxThree").style.backgroundColor = "#141414"; // $almost-black
    document.getElementById("fontBoxThree").style.color = "#fafafa"; // $almost-white

    document.getElementById("fontBoxOne").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxOne").style.color = "#141414"; // $almost-white

    document.getElementById("fontBoxTwo").style.backgroundColor = "#e0e0e0"; // $settingsGrey
    document.getElementById("fontBoxTwo").style.color = "#141414"; // $almost-white
  }
});

// Settings color picker

document.getElementById("colorBoxOne").addEventListener("click", function () {
  if (currColorTypeNum !== "theme0") {
    currColorTypeNum = "theme0";

    document.getElementById("colorCheckRed").style.display = "flex";
    document.getElementById("colorCheckBlue").style.display = "none";
    document.getElementById("colorCheckPurple").style.display = "none";
  }
});

document.getElementById("colorBoxTwo").addEventListener("click", function () {
  if (currColorTypeNum !== "theme1") {
    currColorTypeNum = "theme1";

    document.getElementById("colorCheckRed").style.display = "none";
    document.getElementById("colorCheckBlue").style.display = "flex";
    document.getElementById("colorCheckPurple").style.display = "none";
  }
});

document.getElementById("colorBoxThree").addEventListener("click", function () {
  if (currColorTypeNum !== "theme2") {
    currColorTypeNum = "theme2";

    document.getElementById("colorCheckRed").style.display = "none";
    document.getElementById("colorCheckBlue").style.display = "none";
    document.getElementById("colorCheckPurple").style.display = "flex";
  }
});

// Apply Theme colors func

const setThemeColors = () => {
  // document.getElementById("bodyId").style.backgroundColor = themeColors[currColorTypeNum];
  document.getElementById("settingsApplyButton").style.backgroundColor = themeColors[currColorTypeNum];

  if (currTimerTypeNum === 0) {
    document.getElementById("typePomo").style.backgroundColor = themeColors[currColorTypeNum];
  } else if (currTimerTypeNum === 1) {
    document.getElementById("typeShort").style.backgroundColor = themeColors[currColorTypeNum];
  } else if (currTimerTypeNum === 2) {
    document.getElementById("typeLong").style.backgroundColor = themeColors[currColorTypeNum];
  }
};

// Settings apply clicked

document.getElementById("settingsApplyButton").addEventListener("click", function () {
  timesArray = [
    parseInt(document.getElementById("settingsTimeEditPomo").innerHTML),
    parseInt(document.getElementById("settingsTimeEditShort").innerHTML),
    parseInt(document.getElementById("settingsTimeEditLong").innerHTML),
  ];

  timerTime = timesArray[currTimerTypeNum];

  document.getElementById("timerTimeText").innerHTML = timerTime + ":00";

  document.getElementById("settingsPageContainer").style.display = "none";

  switch (currFontTypeNum) {
    case 0:
      document.getElementById("htmlId").style.fontFamily = "Roboto";
      break;
    case 1:
      document.getElementById("htmlId").style.fontFamily = "Montserrat";
      break;
    case 2:
      document.getElementById("htmlId").style.fontFamily = "Fira Sans Condensed";
      break;
  }

  setThemeColors();
});
