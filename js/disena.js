
'use strict';

//SECCION DISEÑA COLORES//

var radioColors = document.querySelectorAll('.radio-colors');
var sectionCard = document.querySelector('.section--top__card');

function seleccionColor(e) {

  var id = e.target;
  var paleta1 = 'paleta-primary';
  var paleta2 = 'paleta-secondary';
  var paleta3 = 'paleta-tertiary';
  var paleta4 = 'paleta-hearts';
  console.log(id.id);
  if (id.id === paleta1) {
    eliminarColor();
    sectionCard.classList.toggle('primary-palette');
  }
  if (id.id === paleta2) {
    eliminarColor();
    sectionCard.classList.toggle('secondary-palette');
  }
  if (id.id === paleta3) {
    eliminarColor();
    sectionCard.classList.toggle('tertiary-palette');
  }
  if (id.id === paleta4) {
    eliminarColor();
    sectionCard.classList.toggle('hearts-palette');
  }
}

function eliminarColor() {
  sectionCard.classList.remove('primary-palette');
  sectionCard.classList.remove('secondary-palette');
  sectionCard.classList.remove('tertiary-palette');
  sectionCard.classList.remove('hearts-palette');
}

for (var i = 0; i < radioColors.length; i++) {
  radioColors[i].addEventListener('click', seleccionColor);
}

//SECCION DISEÑA FUENTES//

var radioFonts = document.querySelectorAll('.radio-fonts');
var titulo = document.querySelector('.card__title');
var subtitulo = document.querySelector('.card__subtitle');



function seleccionFuente(e) {
  var id = e.target;
  var font1 = 'style-fonts1';
  var font2 = 'style-fonts2';
  var font3 = 'style-fonts3';
  var font4 = 'style-fonts4'
  console.log(id.id);
  if (id.id === font1) {
    eliminaFuente();
    titulo.classList.add('font__style-font1');
    subtitulo.classList.add('font__style-font1');

  }
  if (id.id === font2) {
    eliminaFuente();
    titulo.classList.add('font__style-font2');
    subtitulo.classList.add('font__style-font2');

  }
  if (id.id === font3) {
    eliminaFuente();
    titulo.classList.add('font__style-font3');
    subtitulo.classList.add('font__style-font3');

  }
  if (id.id === font4) {
    eliminaFuente();
    titulo.classList.add('font__style-font4');
    subtitulo.classList.add('font__style-font4');

  }
}

function eliminaFuente() {

  titulo.classList.remove('font__style-font1');
  subtitulo.classList.remove('font__style-font1');
  titulo.classList.remove('font__style-font2');
  subtitulo.classList.remove('font__style-font2');
  titulo.classList.remove('font__style-font3');
  subtitulo.classList.remove('font__style-font3');
  titulo.classList.remove('font__style-font4');
  subtitulo.classList.remove('font__style-font4');

}


for (var i = 0; i < radioFonts.length; i++) {
  radioFonts[i].addEventListener('click', seleccionFuente);
}
