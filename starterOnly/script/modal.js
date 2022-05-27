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
var checkbox1 = document.getElementById("checkbox1");

var LocationTournament = document.querySelector('#location1');
var canOpenEditNav = true;


 firstname.setCustomValidity("");
 lastname.setCustomValidity("");
 BrthDate.setCustomValidity("");
 email.setCustomValidity("");
 checkbox1.setCustomValidity("");
 LocationTournament.setCustomValidity("");

document.getElementById('thank-you').style.display = "none";




// launch modal form
function launchModal() {


  canOpenEditNav = false;
  modalbg.style.display = "block"

  let firstnameInputError = document.querySelector('#FirstNameError');
  let lastnameInputError = document.querySelector('#LastNameError');
  let BirthInputError = document.querySelector('#BirthError');
  let EmailInputError = document.querySelector('#MailError');
  let TournamentInputError = document.querySelector('#TournamentError');
  let checkboxInputError = document.querySelector('#checkboxError');
  
  

  firstname.addEventListener("keyup", function (event) {

    if (firstname.value.length >= 2) {
      //firstname.setCustomValidity("");
      firstnameInputError.style.display = "none";
    } else {
      //firstname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      firstnameInputError.style.display = "block";
    }
  });

  firstname.oninvalid = function (e) {
    if (firstname.value.length >= 2) {
      //firstname.setCustomValidity("");
      firstnameInputError.style.display = "none";
    } else {
      //firstname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      firstnameInputError.style.display = "block";
    }
  };

  lastname.oninvalid = function (e) {
    if (firstname.value.length >= 2) {
      //firstname.setCustomValidity("");
      lastnameInputError.style.display = "none";
    } else {
      //firstname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      lastnameInputError.style.display = "block";
    }
  };

  lastname.addEventListener("keyup", function (event) {
 
    if (lastname.value.length >= 2) {
      lastnameInputError.style.display = "none";
      //lastname.setCustomValidity("");
    } else {
      lastnameInputError.style.display = "block";
      //lastname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    }
  });

  LocationTournament.oninvalid = function (e) {
    TournamentInputError.style.display = "none";
    if (!e.target.validity.valid) {
      TournamentInputError.style.display = "block";
    }
  };

  checkbox1.oninvalid = function (e) {
    checkboxInputError.style.display = "none";
    if (!e.target.validity.valid) {
      checkboxInputError.style.display = "block";
    }
  };

  email.addEventListener("keyup", function (event) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      EmailInputError.style.display = "none";
      //lastname.setCustomValidity("");
    } else {
      EmailInputError.style.display = "block";
      //lastname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    }
  });

  BrthDate.oninvalid = function (e) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      EmailInputError.style.display = "none";
      //lastname.setCustomValidity("");
    } else {
      EmailInputError.style.display = "block";
      //lastname.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
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
  document.querySelector('.hero-section').style.display = "block";

}
