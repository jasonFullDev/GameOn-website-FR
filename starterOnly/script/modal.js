function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
// launch modal form
function launchModal() {
  modalbg.style.display = "block"


  firstname.addEventListener("keyup", function (event) {

    if (firstname.value.length >= 2) {
      firstname.setCustomValidity("");
    } else {
      firstname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    }
  });


  lastname.addEventListener("keyup", function (event) {

    if (lastname.value.length >= 2) {
      lastname.setCustomValidity("");
    } else {
      lastname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    }
  });

  BrthDate.oninvalid = function (e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity("Vous devez entrer votre date de naissance.");
    }
  };
  BrthDate.oninput = function (e) {
    e.target.setCustomValidity("");
  };





}
function validate() {


  var formData = new FormData(formData)

}

