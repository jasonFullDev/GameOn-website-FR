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

var validationcond = document.getElementById('checkbox1');
var informcond = document.getElementById('checkbox2');

var quantity = document.getElementById('quantity');

var canOpenEditNav = true;



document.getElementById('thank-you').style.display = "none";



function initForm(){
  
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  BrthDate.value = "";

  quantity.value = "";

  let allel = document.querySelectorAll('.checkbox-input[name=location]');
  allel.forEach(element => {
    element.checked = false;
  });

  validationcond.checked = false;
  informcond.checked = false;
}

// launch modal form
function launchModal() {

  initForm();
  canOpenEditNav = false;
  modalbg.style.display = "block"


  firstname.addEventListener("keyup", function (event) {

    let error = firstname.parentNode.querySelector('p');
    if (firstname.value.length >= 2) {
      error.classList.remove('onerror');
    } else {
      error.classList.add('onerror');
    }
  });


  lastname.addEventListener("keyup", function (event) {
    let error = lastname.parentNode.querySelector('p');
    if (lastname.value.length >= 2) {
      error.classList.remove('onerror');
      
    } else {
      error.classList.add('onerror');
    }
  });


  email.addEventListener('keyup' , () => {

    let regex = new RegExp("[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+")
    let result = email.value.match(regex);

    let error = email.parentNode.querySelector('p');
  
    if (!result) {
      error.classList.add('onerror');
    }
    else
    { 
      error.classList.remove('onerror');
    }

   
  }); 

  BrthDate.oninvalid = function (e) {
    let error = BrthDate.parentNode.querySelector('p');
    error.classList.remove('onerror');
    if (!e.target.validity.valid) {
      error.classList.add('onerror');
    }
  };




  let allel = document.querySelectorAll('.checkbox-input[name=location]');

  allel.oninvalid = function(e){
    let error = allel[0].parentNode.querySelector('p');
    error.classList.remove('onerror');
    if (!e.target.validity.valid) {
      error.classList.add('onerror');
    }
  }

  for (let i = 0; i < allel.length; i++) {
    allel[i].addEventListener('change', function () {
      for (let u = 0; u < allel.length; u++) {
        allel[u].removeAttribute('required');
        allel[u].setCustomValidity("");
      }
    });
  }


  validationcond.oninvalid = function(e){
    let error = validationcond.parentNode.querySelector('p');
    error.classList.remove('onerror');
    if (!e.target.validity.valid) {
      error.classList.add('onerror');
    }
  }


  document.querySelector("#myform").addEventListener('submit', (event) => validate(event));


}

function closeModal() {
  modalbg.style.display = "none"
}



function validate(event) {

  //var formData = new FormData(formData)
  document.querySelector('.bground').style.display = "none";
  document.getElementById('thank-you').classList.add('active');
  document.querySelector('.hero-section').classList.add('displaynone');
  event.preventDefault();
}



function closeThank() {
  canOpenEditNav = true;
  document.getElementById('thank-you').classList.remove('active');
  document.querySelector('.hero-section').classList.remove('displaynone');
}
