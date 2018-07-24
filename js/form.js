'use strict';

const inputDataText = document.querySelectorAll('.input--text');
//INPUTS HREF
const inputDataHref = document.querySelectorAll('.input--href');

const updateCard = (event) => {
  const inputElement = event.currentTarget;
  const targetID = inputElement.getAttribute('data-elementos');
  const nameLocal = event.currentTarget.name;
  saveLocalStorage(nameLocal, inputElement.value);
  document.querySelector('#' + targetID).innerHTML = inputElement.value;
}

for (let inputItem of inputDataText) {
  inputItem.addEventListener('keyup', updateCard);
}

const updateHrefCard = (event) => {
  const inputHref = event.currentTarget;
  const targetHref = inputHref.getAttribute('data-href');
  const hrefNameLocal = event.currentTarget.name;
  saveLocalStorage(hrefNameLocal, inputHref.value);
  document.querySelector('#' + targetHref).href = inputHref.value;
  console.log(targetHref);
}

for (let inputItem2 of inputDataHref) {
  inputItem2.addEventListener('keyup', updateHrefCard);

}

