function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav" && canOpenEditNav) {
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
closeBtn.addEventListener("click", closeModal)

var firstname = document.getElementById("first");
var lastname = document.getElementById("last");
var BrthDate = document.getElementById("birthdate");
var email = document.getElementById("email");

var canOpenEditNav = true;

lastname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");

BrthDate.setCustomValidity("Vous devez entrer votre date de naissance.");

document.getElementById('thank-you').style.display = "none";




// launch modal form
function launchModal() {


  canOpenEditNav = false;
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



  let allel = document.querySelectorAll('.checkbox-input[name=location]');

  for (let i = 0; i < allel.length; i++) {
    allel[i].addEventListener('change', function () {
      for (let u = 0; u < allel.length; u++) {
        allel[u].removeAttribute('required');
        allel[u].setCustomValidity("");
      }
    });
  }


  document.querySelector("#myform").addEventListener('submit', (event) => validate(event));


}

function closeModal() {
  modalbg.style.display = "none"
}


function validate(event) {

  //var formData = new FormData(formData)
  document.querySelector('.bground').style.display = "none";
  document.getElementById('thank-you').style.display = "block";
  document.querySelector('.hero-section').style.display = "none";

  event.preventDefault();
}



function closeThank() {
  canOpenEditNav = true;
  document.getElementById('thank-you').style.display = "none";
  document.querySelector('.hero-section').style.display = "initial";

}
