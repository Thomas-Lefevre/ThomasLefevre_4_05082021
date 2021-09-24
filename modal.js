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
const modalSubmit = document.querySelector(".btn-submit");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
//Prenom
const formPrenom = document.getElementById("first");
const prenomInvalide = document.getElementById("prenomInvalide");
//Nom de famille
const formNom = document.getElementById("last");
const nomInvalide = document.getElementById("nomInvalide");
//Email
const formEmail = document.getElementById("email");
const emailInvalide = document.getElementById("emailInvalide");
//Nombre de concours
const formQuantity = document.getElementById("quantity");
const quantityInvalide = document.getElementById("quantityInvalide");
//Location
// const formLocation = document.querySelectorAll("div.formData.location > input.checkbox-input");
// const locationInvalide= document.getElementById("locationInvalide");
//condition générales
const formCondition = document.getElementById("checkbox1");
const conditionInvalide = document.getElementById("conditionInvalide");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// event fermer la modal
modalClose.addEventListener('click', closeModal);

//soumettre le formulaire
modalSubmit.addEventListener("click",validation);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermer la modal
function closeModal() {
  modalbg.style.display = "none";
}

//validation
function validation(event){
  //si le champ prenom est vide
  if (formPrenom.validity.valueMissing){
    event.preventDefault();
    prenomInvalide.textContent= "Veuillez entrer un prénom.";
    prenomInvalide.style.color = "red";
  };
  //si le champ prenom est trop court
  if (formPrenom.validity.tooShort){
    event.preventDefault();
    prenomInvalide.textContent= "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenomInvalide.style.color = "red";
  };
  //si le champ nom est vide
  if(formNom.validity.valueMissing){
    event.preventDefault();
    nomInvalide.textContent="Veuillez entrer un nom de famille.";
    nomInvalide.style.color = "red";
  };
  //si le champ nom est trop court
  if (formNom.validity.tooShort){
    event.preventDefault();
    nomInvalide.textContent= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    nomInvalide.style.color = "red";
  };
  //si le champ email n'est pas valide
  if((formEmail.validity.valid)==false){
    event.preventDefault();
    emailInvalide.textContent="Veuillez entrer une adresse email valide";
    emailInvalide.style.color="red";
  };
  //si ce n'est pas un nombre
  if((formQuantity.validity.valid)==false){
    event.preventDefault();
    quantityInvalide.textContent="Veuillez entrer un nombre";
    quantityInvalide.style.color="red";
  };
  //si il n'y a aucune ville de choisi
  // if(formLocation.validity.valueMissing){
  //   event.preventDefault();
  //   locationInvalide.textContent="Veuillez entrer un nom de famille.";
  //   locationInvalide.style.color = "red";
  // };
  //si la case conditions générales n'est pas cochée
  if(formCondition.checked == false){
    event.preventDefault();
    conditionInvalide.textContent="Veuillez accepter les conditions d'utilisation";
    conditionInvalide.style.color="red";
  }
}