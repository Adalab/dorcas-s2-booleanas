
'use strict';

//SECCION DISEÑA COLORES//

const radioColors = document.querySelectorAll('.radio-colors');
const sectionCard = document.querySelector('.section--top__card');

const seleccionColor = (e) => {

  const id = e.target;
  console.log(id.value)
  const paleta1 = 'paleta-primary';
  const paleta2 = 'paleta-secondary';
  const paleta3 = 'paleta-tertiary';
  const paleta4 = 'paleta-hearts';
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

const eliminarColor = () => {
  sectionCard.classList.remove('primary-palette');
  sectionCard.classList.remove('secondary-palette');
  sectionCard.classList.remove('tertiary-palette');
  sectionCard.classList.remove('hearts-palette');
}

for (let itemColors of radioColors) {
  itemColors.addEventListener('click', seleccionColor);
}

//SECCION DISEÑA FUENTES//

const radioFonts = document.querySelectorAll('.radio-fonts');
const titulo = document.querySelector('.card__title');
const subtitulo = document.querySelector('.card__subtitle');
const skills = document.querySelectorAll('.icon__text');



const seleccionFuente = (e) => {
  const id = e.target;
  const font1 = 'style-fonts1';
  const font2 = 'style-fonts2';
  const font3 = 'style-fonts3';
  const font4 = 'style-fonts4';
  console.log(id.id);
  if (id.id === font1) {
    
    const fonClass1 = 'font__style-font1';
    eliminaFuente(fonClass1);
    titulo.classList.add('font__style-font1');
    subtitulo.classList.add('font__style-font1');
    for(let itemFonts of skills){
      console.log('${itemFonts}');
      itemFonts.classList.add('font__style-font1');
    }

  }
  if (id.id === font2) {
    
    const fonClass2 = 'font__style-font2';
    eliminaFuente(fonClass2);
    titulo.classList.add('font__style-font2');
    subtitulo.classList.add('font__style-font2');
    for (let itemFonts of skills) {
      console.log('${itemFonts}');
      itemFonts.classList.add('font__style-font2');
    }

  }
  if (id.id === font3) {
  
      const fonClass3 = 'font__style-font3';
      eliminaFuente(fonClass3);
    titulo.classList.add('font__style-font3');
    subtitulo.classList.add('font__style-font3');
    for (let itemFonts of skills) {
      itemFonts.classList.add('font__style-font3');
    }

  }
  if (id.id === font4) {
   
    const fonClass4 = 'font__style-font4';
    eliminaFuente(fonClass4);
    titulo.classList.add('font__style-font4');
    subtitulo.classList.add('font__style-font4');
    for (let itemFonts of skills) {
      itemFonts.classList.add('font__style-font4');
    }

  }
}

const eliminaFuente = (font) => {

console.log("eliminar ", font);

  titulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  subtitulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  titulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  subtitulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  titulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  subtitulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  titulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
  subtitulo.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
   for (let itemSkills of skills) {
     itemSkills.classList.remove('font__style-font1', 'font__style-font2', 'font__style-font3', 'font__style-font4');
   }

}


for (let itemRadioFonts of radioFonts) {
  itemRadioFonts.addEventListener('click', seleccionFuente);
}
