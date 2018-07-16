
'use strict';

//SECCION DISEÑA COLORES//

var radioColors = document.querySelectorAll('.radio-colors');
var sectionCard = document.querySelector('.section--top__card');

function seleccionColor(e) {

  var id = e.target;
  console.log(id.value)
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
var skills = document.querySelectorAll('.icon__text');



function seleccionFuente(e) {
  var id = e.target;
  var font1 = 'style-fonts1';
  var font2 = 'style-fonts2';
  var font3 = 'style-fonts3';
  var font4 = 'style-fonts4';
  console.log(id.id);
  if (id.id === font1) {
    
    var fonClass1 = 'font__style-font1';
    eliminaFuente(fonClass1);
    titulo.classList.add('font__style-font1');
    subtitulo.classList.add('font__style-font1');
    for(var i = 0 ; i < skills.length; i++){
      console.log(skills[i]);
      skills[i].classList.add('font__style-font1');
    }

  }
  if (id.id === font2) {
    
    var fonClass2 = 'font__style-font2';
    eliminaFuente(fonClass2);
    titulo.classList.add('font__style-font2');
    subtitulo.classList.add('font__style-font2');
    for (var i = 0; i < skills.length; i++) {
      skills[i].classList.add('font__style-font2');
    }

  }
  if (id.id === font3) {
  
      var fonClass3 = 'font__style-font3';
      eliminaFuente(fonClass3);
    titulo.classList.add('font__style-font3');
    subtitulo.classList.add('font__style-font3');
    for (var i = 0; i < skills.length; i++) {
      skills[i].classList.add('font__style-font3');
    }

  }
  if (id.id === font4) {
   
    var fonClass4 = 'font__style-font4';
    eliminaFuente(fonClass4);
    titulo.classList.add('font__style-font4');
    subtitulo.classList.add('font__style-font4');
    for (var i = 0; i < skills.length; i++) {
      skills[i].classList.add('font__style-font4');
    }

  }
}

function eliminaFuente(font) {

console.log("eliminar ", font);

  titulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  subtitulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  titulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  subtitulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  titulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  subtitulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  titulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  subtitulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
   for (var i = 0; i < skills.length; i++) {
     skills[i].classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
   }

}


for (var i = 0; i < radioFonts.length; i++) {
  radioFonts[i].addEventListener('click', seleccionFuente);
}
