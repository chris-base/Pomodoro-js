var runningInterval = null;
let timesArray = [25, 5, 10];
var distance = 0;
let currTimerTypeNum = 0;
let currFontTypeNum = 0;
let currColorTypeNum = "theme0";

const themeColors = {
  theme0: ["#ff6257", "#2f3169", "#21234a"],
  theme1: ["#4530ff", "#f56b38", "#c2532b"],
  theme2: ["#e724eb", "#8424EB", "#6B12CA"],
};

document.getElementById("timerTimeText").innerHTML = timesArray[currTimerTypeNum] + ":00";

const pomodoroTypeChange = () => {
  document.getElementById("typePomo").style.backgroundColor = themeColors[currColorTypeNum][0];
  currTimerTypeNum = 0;
  document.getElementById("typeShort").style.backgroundColor = "transparent";
  document.getElementById("typeLong").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

  document.getElementById("timerStartStopText").innerHTML = "Start";
  document.getElementById("timerTimeText").innerHTML = timesArray[currTimerTypeNum] + ":00";
};

const shortTypeChange = () => {
  document.getElementById("typeShort").style.backgroundColor = themeColors[currColorTypeNum][0];
  currTimerTypeNum = 1;
  document.getElementById("typePomo").style.backgroundColor = "transparent";
  document.getElementById("typeLong").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

  document.getElementById("timerStartStopText").innerHTML = "Start";
  document.getElementById("timerTimeText").innerHTML = timesArray[currTimerTypeNum] + ":00";
};

const longTypeChange = () => {
  document.getElementById("typeLong").style.backgroundColor = themeColors[currColorTypeNum][0];
  currTimerTypeNum = 2;
  document.getElementById("typeShort").style.backgroundColor = "transparent";
  document.getElementById("typePomo").style.backgroundColor = "transparent";

  clearInterval(runningInterval);
  distance = 0;

  document.getElementById("timerStartStopText").innerHTML = "Start";
  document.getElementById("timerTimeText").innerHTML = timesArray[currTimerTypeNum] + ":00";
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

    var minToMilli = 60000 * timesArray[currTimerTypeNum] + 995;

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

      console.log(distance);

      if (distance < 0) {
        clearInterval(runningInterval);
        document.getElementById("timerTimeText").innerHTML = "0:00";

        function beep() {
          var snd = new Audio(
            "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
          );
          snd.play();
        }
        beep();
      }
    }, 1000);
  }
});

document.getElementById("settingsButtonContainer").addEventListener("click", function () {
  document.getElementById("settingsTimeEditPomo").innerHTML = timesArray[0];
  document.getElementById("settingsTimeEditShort").innerHTML = timesArray[1];
  document.getElementById("settingsTimeEditLong").innerHTML = timesArray[2];

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
  document.getElementById("settingsApplyButton").style.backgroundColor = themeColors[currColorTypeNum][0];
  document.getElementById("bodyId").style.backgroundColor = themeColors[currColorTypeNum][1];
  document.getElementById("timerContainer").style.backgroundColor = themeColors[currColorTypeNum][2];
  document.getElementById("timerTextContainer").style.backgroundColor = themeColors[currColorTypeNum][2];
  document.getElementById("timerTypeContainer").style.backgroundColor = themeColors[currColorTypeNum][2];

  if (currTimerTypeNum === 0) {
    document.getElementById("typePomo").style.backgroundColor = themeColors[currColorTypeNum][0];
  } else if (currTimerTypeNum === 1) {
    document.getElementById("typeShort").style.backgroundColor = themeColors[currColorTypeNum][0];
  } else if (currTimerTypeNum === 2) {
    document.getElementById("typeLong").style.backgroundColor = themeColors[currColorTypeNum][0];
  }
};

// Settings apply clicked

document.getElementById("settingsApplyButton").addEventListener("click", function () {
  if (!isNaN(parseInt(document.getElementById("settingsTimeEditPomo").innerHTML))) {
    timesArray[0] = parseInt(document.getElementById("settingsTimeEditPomo").innerHTML);
  }

  if (!isNaN(parseInt(document.getElementById("settingsTimeEditShort").innerHTML))) {
    timesArray[1] = parseInt(document.getElementById("settingsTimeEditShort").innerHTML);
  }

  if (!isNaN(parseInt(document.getElementById("settingsTimeEditLong").innerHTML))) {
    timesArray[2] = parseInt(document.getElementById("settingsTimeEditLong").innerHTML);
  }

  document.getElementById("timerTimeText").innerHTML = timesArray[currTimerTypeNum] + ":00";

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
