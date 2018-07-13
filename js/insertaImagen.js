'use strict';

var fr = new FileReader();

var btnImg = document.querySelector('.input--stuffed__img');
var inputImg = document.querySelector('#img--profile');
var profileImg = document.querySelector('.photo');
var preview = document.querySelector('.preview');



function getImage(e) {

  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);

}

function writeImage() {

  profileImg.src = fr.result;
  preview.src = fr.result;
}



function inputClick() {

  inputImg.click();


}


inputImg.addEventListener('change', getImage);
btnImg.addEventListener('click', inputClick);