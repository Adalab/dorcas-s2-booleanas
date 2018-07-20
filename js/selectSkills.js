'use strict';

let contenedor = document.querySelector('.label--stuffed__container-select');
const btn = document.querySelectorAll('.btn-select');
let contador = 1;
const minus = '<i class="fas fa-minus"></i>';
const plus = '<i class="fas fa-plus"></i>';
//const itemUl = document.querySelector('.card__skills');



fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    const skills = [];
    for (let i = 0; i < json.skills.length; i++) {

      skills[i] = json.skills[i];

    }

    const añadeSelect = (e) => {

      const boton = e.currentTarget;
      console.log('e', boton);
      console.log(boton.firstChild.className);

      if (boton.firstChild.className === 'fas fa-plus') {
        if (contador < 3) {
          contador++;
          boton.innerHTML = `${minus}`;
          creaSelect();
          botones(btn);
        }
      } else {
        boton.innerHTML = `${plus}`;
        borraSelect();
        botones(btn);
      }
    };

    const botones = (btn) => {

      btn = document.querySelectorAll('.btn-select');
      // Hacer un map
      for (let i = 0; i < btn.length; i++) {

        btn[i].addEventListener('click', añadeSelect);

      }
      console.log(btn.length);

      // btn.map(function(button) {
      //   return button.addEventListener('click', añadeSelect);
      // });
    };

    const actualizaTarjeta = () => {

      const listSelects = document.querySelectorAll('.skills--stuffed');
      const spans = document.querySelectorAll('.icon__text');

      spans.innerHTML = '';

      for (let i = 0; i < listSelects.length; i++) {
        spans[i].innerHTML = '';
        spans[i].innerHTML = `${listSelects[i].value}`;
      }
    };

    const creaSelect = () => {

      const newSelect = document.createElement('select');
      newSelect.classList.add('skills--stuffed');

      const newBtn = document.createElement('button');
      newBtn.classList.add('btn-select');

      const newIcon = document.createElement('i');
      newIcon.classList.add('fas');
      newIcon.classList.add('fa-plus');

      newBtn.appendChild(newIcon);

      const container = document.createElement('div');

      for (let i = 0; i < skills.length; i++) {
        const newOption = document.createElement('option');
        const optionText = document.createTextNode(skills[i]);
        newOption.appendChild(optionText);
        newSelect.appendChild(newOption);
        container.classList.add('container-select');
        container.appendChild(newSelect);
        container.appendChild(newBtn);
        contenedor.appendChild(container);
      }

      newSelect.addEventListener('change', actualizaTarjeta);

      return newSelect;
    };

    const borraSelect = () => {
      contenedor = document.querySelector('.label--stuffed__container-select');
      contenedor.removeChild(contenedor.lastChild);
      contador--;
      //actualizaTarjeta();
    };
    creaSelect();
    botones();
  });
