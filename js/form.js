'use strict';

var inputDataText = document.querySelectorAll('.input--text');
//INPUTS HREF
var inputDataHref = document.querySelectorAll('.input--href');

function updateCard(event) {
  var inputElement = event.currentTarget;
  var targetID = inputElement.getAttribute('data-elementos');
  var nameLocal = event.currentTarget.name;
  saveLocalStorage(nameLocal, inputElement.value);
  document.querySelector('#' + targetID).innerHTML = inputElement.value;
}

for (var i = 0; i < inputDataText.length; i++) {
  inputDataText[i].addEventListener('keyup', updateCard);
}



function updateHrefCard(event) {
  var inputHref = event.currentTarget;
  var targetHref = inputHref.getAttribute('data-href');
  var hrefNameLocal = event.currentTarget.name;
  saveLocalStorage(hrefNameLocal, inputHref.value);
  document.querySelector('#' + targetHref).href = inputHref.value;
  console.log(targetHref);

}

for (var i = 0; i < inputDataHref.length; i++) {
  inputDataHref[i].addEventListener('keyup', updateHrefCard);

}

