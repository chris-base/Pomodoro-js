let currTimerType = 0;
const themeColor1 = "#ff6257";

document.getElementById("typePomo").addEventListener("click", function () {
  if (currTimerType !== 0) {
    document.getElementById("typePomo").style.backgroundColor = themeColor1;
    currTimerType = 0;
    document.getElementById("typeShort").style.backgroundColor = "transparent";
    document.getElementById("typeLong").style.backgroundColor = "transparent";
  }
});

document.getElementById("typeShort").addEventListener("click", function () {
  if (currTimerType !== 1) {
    document.getElementById("typeShort").style.backgroundColor = themeColor1;
    currTimerType = 1;
    document.getElementById("typePomo").style.backgroundColor = "transparent";
    document.getElementById("typeLong").style.backgroundColor = "transparent";
  }
});

document.getElementById("typeLong").addEventListener("click", function () {
  if (currTimerType !== 2) {
    document.getElementById("typeLong").style.backgroundColor = themeColor1;
    currTimerType = 2;
    document.getElementById("typeShort").style.backgroundColor = "transparent";
    document.getElementById("typePomo").style.backgroundColor = "transparent";
  }
});
