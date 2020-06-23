// password

var error = document.getElementById("pw-error");
var input = document.getElementById("pw-input");

function pwSubmit() {
   error.classList.add("pw-throw-error");
   input.classList.add("input-error");
   console.log("error");
}
