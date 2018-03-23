function goBack() {
  window.location.href = window.location.href.replace("sources.html", " ");
}

var idleTime = 0;
console.log("Starting count down");
var idleInterval = setInterval(timerIncrement, 1000); // 1 second

//Zero the idle timer on mouse movement.
$(document).mousemove(function (e) {
    idleTime = 0;
    console.log("Mousemove");
    $(".ruthere").css("display", "none");
});

function timerIncrement() {
  idleTime = idleTime + 1;
  console.log(idleTime);
  if (idleTime > 9) { // 20 minutes
      window.location.href = window.location.href.replace("sources.html", " ");
  }

  if (idleTime > 5) {
    $(".ruthere").css("display", "block");
  }
}

//Prevent right click
document.addEventListener('contextmenu', event => event.preventDefault());
