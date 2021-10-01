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
const iconCloseThank = document.querySelector(".iconCloseThank");
const thankModal = document.querySelector(".thankBground");
const thankModalBtn = document.getElementById("closeThank");
//Prenom
const formPrenom = document.getElementById("first");
const prenomInvalide = document.getElementById("prenomInvalide");
//Nom de famille
const formNom = document.getElementById("last");
const nomInvalide = document.getElementById("nomInvalide");
//Email
const formEmail = document.getElementById("email");
const emailInvalide = document.getElementById("emailInvalide");
//Date de naissance
const formDate = document.getElementById("birthdate");
const dateInvalide = document.getElementById("dateInvalide");
//Nombre de concours
const formQuantity = document.getElementById("quantity");
const quantityInvalide = document.getElementById("quantityInvalide");
//condition générales
const formCondition = document.getElementById("checkbox1");
const conditionInvalide = document.getElementById("conditionInvalide");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// event fermer la modal
modalClose.addEventListener('click', closeModal);

// event fermer la modal de confirmation
thankModalBtn.addEventListener('click', closeThankModal);
iconCloseThank.addEventListener('click', closeThankModal);

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

// fermer la modal de confirmation 
function closeThankModal(){
  thankModal.style.display= "none";
}

//validation
function validation(event){
  let erreur = 0 ;
  //si le champ prenom est vide
  if (formPrenom.validity.valueMissing){
    event.preventDefault();
    prenomInvalide.textContent= "Veuillez entrer un prénom.";
    formPrenom.style.border = "2px solid red"
    prenomInvalide.style.fontSize= "12px"
    prenomInvalide.style.color = "red";
    erreur ++;
  };
  //si le champ prenom est trop court
  if (formPrenom.validity.tooShort){
    event.preventDefault();
    prenomInvalide.textContent= "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    formPrenom.style.border = "2px solid red"
    prenomInvalide.style.fontSize= "12px"
    prenomInvalide.style.color = "red";
    erreur ++;
  };
  //si le champ nom est vide
  if(formNom.validity.valueMissing){
    event.preventDefault();
    nomInvalide.textContent="Veuillez entrer un nom de famille.";
    formNom.style.border = "2px solid red"
    nomInvalide.style.fontSize= "12px"
    nomInvalide.style.color = "red";
    erreur ++;
  };
  //si le champ nom est trop court
  if (formNom.validity.tooShort){
    event.preventDefault();
    nomInvalide.textContent= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    formNom.style.border = "2px solid red"
    nomInvalide.style.fontSize= "12px"
    nomInvalide.style.color = "red";
    erreur ++;
  };
  //si le champ email n'est pas valide
  if((formEmail.validity.valid)==false){
    event.preventDefault();
    emailInvalide.textContent="Veuillez entrer une adresse email valide";
    formEmail.style.border = "2px solid red"
    emailInvalide.style.fontSize= "12px"
    emailInvalide.style.color="red";
    erreur ++;
  };
  //si la date est vide
  if (formDate.validity.valueMissing){
    event.preventDefault();
    dateInvalide.textContent= "Veuillez entrer une date de naissance.";
    formDate.style.border = "2px solid red"
    dateInvalide.style.fontSize= "12px"
    dateInvalide.style.color = "red";
    erreur ++;
  };
  //si ce n'est pas un nombre
  if((formQuantity.validity.valid)==false){
    event.preventDefault();
    quantityInvalide.textContent="Veuillez entrer un nombre";
    formQuantity.style.border = "2px solid red"
    quantityInvalide.style.fontSize= "12px"
    quantityInvalide.style.color="red";
    erreur ++;
  };
  //si la case conditions générales n'est pas cochée
  if(formCondition.checked == false){
    event.preventDefault();
    conditionInvalide.textContent="Veuillez accepter les conditions d'utilisation";
    formCondition.style.border = "2px solid red"
    conditionInvalide.style.fontSize= "12px"
    conditionInvalide.style.color="red";
    erreur ++;
  };
  if (erreur ===0){
      thankModal.style.display = "block";
      event.preventDefault();
  }
}