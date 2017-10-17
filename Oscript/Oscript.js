function Oscript() {
  this.email;

  this.init = function(email) {
    if (typeof(email) === "string") {
      this.email = email;
    } else {
      console.error("The email " + email + " is not a string!");
    }
    console.log("Oscript is ready with the email " + email);
  }

  this.email = function(subject, contents) {
    if (typeof(subject) === "string") {
      if (typeof(contents) === "string") {
        window.open('mailto:' + this.email +'?subject=' + subject  + '&body=' + body);
      } else {
        console.error("The contents of the email isn't a string!");
      }
    } else {
      console.error("The subject of the email isn't a string!");
    }
  }
}
