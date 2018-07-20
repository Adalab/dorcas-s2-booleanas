'use strict';

const fr = new FileReader();
const btnImg = document.querySelector('.input--stuffed__img');
const inputImg = document.querySelector('#img--profile');
const profileImg = document.querySelector('.photo');
const preview = document.querySelector('.preview');

// function writeImage() {
//   profileImg.src = fr.result;
//   preview.src = fr.result;
// }

const writeImage = () => {
  profileImg.src = fr.result;
  preview.src = fr.result;
};

// function getImage(e) {
//   const myFile = e.currentTarget.files[0];
//   fr.addEventListener('load', writeImage);
//   fr.readAsDataURL(myFile);
// }

const getImage = (e) => {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
};

// function inputClick() {
//   inputImg.click();
// }

const inputClick = () => inputImg.click();

inputImg.addEventListener('change', getImage);
btnImg.addEventListener('click', inputClick);
