let currTimerType = 0;

document.getElementById("typePomo").addEventListener("click", function () {
  if (currTimerType !== 0) {
    document.getElementById("typePomo").style.backgroundColor = "#c80a0a";
  }
});
