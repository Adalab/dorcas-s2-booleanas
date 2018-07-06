'use strict';
//Formulario INPUTS
var inputDataText = document.querySelectorAll('.input--text');

function updateCard(event) {
  var inputElement = event.currentTarget;
  var targetID = inputElement.getAttribute('data-elementos');
  document.querySelector('#' + targetID).innerHTML = inputElement.value;
}

for (var i = 0; i < inputDataText.length; i++) {
  inputDataText[i].addEventListener('keyup', updateCard);
}

//INPUTS HREF
var inputDataHref = document.querySelectorAll('.input--href');

function updateHrefCard(event) {
  var inputHref = event.currentTarget;
  var targetHref = inputHref.getAttribute('data-href');
  console.log(inputHref);
  document.querySelector('#' + targetHref).href = inputHref.value;
  console.log(targetHref);
}

for (var i = 0; i < inputDataHref.length; i++) {
  inputDataHref[i].addEventListener('keyup', updateHrefCard);
}
