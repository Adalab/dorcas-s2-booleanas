'use strict';
//Formulario INPUTS
var inputDataText = document.querySelectorAll('.input--text');
//INPUTS HREF
var inputDataHref = document.querySelectorAll('.input--href');

//funciones datos
function updateCard(event) {
  var inputElement = event.currentTarget;
  var targetID = inputElement.getAttribute('data-elementos');
  document.querySelector('#' + targetID).innerHTML = inputElement.value;
}

for (var i = 0; i < inputDataText.length; i++) {
  inputDataText[i].addEventListener('keyup', updateCard);
}

//funciones HREF
function updateHrefCard(event) {
  var inputHref = event.currentTarget;
  var targetHref = inputHref.getAttribute('data-href');
  console.log(inputHref);
  var iconHref = document.querySelector('#' + targetHref);
  var typeData = inputHref.getAttribute('data-type');
  console.log(typeData);
  if (typeData === 'email') {
    iconHref.href = 'mailto://' + inputHref.value;
  } else if (typeData === 'tlf') {
    iconHref.href = 'tel:' + inputHref.value;
  } else if (typeData === 'linkedin') {
    iconHref.href = 'https://www.linkedin.com/in/' + inputHref.value;
  } else if (typeData === 'github') {
    iconHref.href = 'https://github.com/' + inputHref.value;
  }
  console.log(targetHref);
}

for (var i = 0; i < inputDataHref.length; i++) {
  inputDataHref[i].addEventListener('keyup', updateHrefCard);
}
