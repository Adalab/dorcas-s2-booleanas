'use strict';



var contenedor = document.querySelector('.label--stuffed__container-select');
var btn = document.querySelectorAll('.btn-select');
var contador = 1;
var minus = '<i class="fas fa-minus"></i>';
var plus = '<i class="fas fa-plus"></i>';
var itemUl = document.querySelector('.card__skills');



fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    var skills = [];
    for (var i = 0; i < json.skills.length; i++) {

      skills[i] = json.skills[i];

    }


    function actualizaTarjeta() {

      var listSelects = document.querySelectorAll('.skills--stuffed');
      var spans = document.querySelectorAll('.icon__text');

      spans.innerHTML = '';

      for (var i = 0; i < listSelects.length; i++) {
        spans[i].innerHTML = '';
        spans[i].innerHTML = listSelects[i].value;
      }

    }

    function creaSelect() {

      var newSelect = document.createElement('select');
      newSelect.classList.add('skills--stuffed');

      var newBtn = document.createElement('button');
      newBtn.classList.add('btn-select');

      var newIcon = document.createElement('i');
      newIcon.classList.add('fas');
      newIcon.classList.add('fa-plus');

      newBtn.appendChild(newIcon);

      var container = document.createElement('div');

      for (var i = 0; i < skills.length; i++) {
        var newOption = document.createElement('option');
        var optionText = document.createTextNode(skills[i]);
        newOption.appendChild(optionText);
        newSelect.appendChild(newOption);
        container.classList.add('container-select');
        container.appendChild(newSelect);
        container.appendChild(newBtn);
        contenedor.appendChild(container);
      }

      newSelect.addEventListener('change', actualizaTarjeta);

      return newSelect;

    }

    function borraSelect() {
      contenedor = document.querySelector('.label--stuffed__container-select');
      contenedor.removeChild(contenedor.lastChild);
      contador--;
      //actualizaTarjeta();
    }


    function añadeSelect(e) {

      var boton = e.currentTarget;
      console.log("e ", boton);
      console.log(boton.firstChild.className);

      if (boton.firstChild.className === 'fas fa-plus') {
        if (contador < 3) {
          contador++;
          boton.innerHTML = minus;
          creaSelect();
          botones(btn);
        }
      } else {
        boton.innerHTML = plus;
        borraSelect();
        botones(btn);
      }


    }

    function botones(btn) {

      btn = document.querySelectorAll('.btn-select');
      for (var i = 0; i < btn.length; i++) {

        btn[i].addEventListener('click', añadeSelect);

      }
      console.log(btn.length);
    }


    creaSelect();
    botones();




  });
