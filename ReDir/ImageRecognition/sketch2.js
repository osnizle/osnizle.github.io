function goBack() {
  window.location.href = window.location.href.replace("how-does-it-work.html", " ");
}

function goSources() {
  window.location.href = window.location.href.replace("how-does-it-work.html", "sources.html");
}
var idleTime = 0;
document.getElementById('video').onended = function() {
  console.log("Finnished Video");
  var idleInterval = setInterval(timerIncrement, 2000); // 2 seconds

  //Zero the idle timer on mouse movement.
  $(document).mousemove(function (e) {
      idleTime = 0;
      console.log("Mousemove");
      $(".ruthere").css("display", "none");
  });
};

function timerIncrement() {
  idleTime = idleTime + 1;
  console.log(idleTime);
  if (idleTime > 9) { // 20 minutes
      window.location.href = window.location.href.replace("how-does-it-work.html", " ");
  }

  if (idleTime > 5) {
    $(".ruthere").css("display", "block");
  }
}

//Prevent right click
document.addEventListener('contextmenu', event => event.preventDefault());
