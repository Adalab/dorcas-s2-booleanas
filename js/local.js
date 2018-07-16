'use strict';
var localValue = {
  palette: '',
  typography: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
  skills: []
};
var datos = document.querySelectorAll('.input--stuffed');
var btnCreaTarjeta = document.querySelector('.form2__button');
var buttonReset = document.querySelector('.button');
function saveLocalStorage(id, value) {
  console.log('id y value', id, value);
  var updateLocalValue = [];
  console.log(updateLocalValue);
  localValue[id] = value;
  console.log(localValue);
  updateLocalValue[0] = localValue;
  console.log(updateLocalValue);
  localStorage.setItem('localValue', JSON.stringify(updateLocalValue));
  var form = document.querySelector('.form');
  console.log(updateLocalValue);
}
var form = document.querySelector('.form');

function crearLocalStorage() {
  var json = JSON.parse(localStorage.getItem('localValue'));
  var updateLocalValue = json;
  console.log('get localstorage', updateLocalValue);
  console.log(updateLocalValue[0].name);
  var name = document.querySelector('#complete--name');
  var job = document.querySelector('#job');
  var email = document.querySelector('#email.input--stuffed');
  var tlf = document.querySelector('#tlf.input--stuffed');
  var lkd = document.querySelector('#lkd');
  var git = document.querySelector('#gith');
  var cardName = document.querySelector('#card--name');
  var cardJob = document.querySelector('#card--job');

  name.value = updateLocalValue[0].name;
  job.value = updateLocalValue[0].job;
  email.value = updateLocalValue[0].email;
  tlf.value = updateLocalValue[0].phone;
  lkd.value = updateLocalValue[0].linkedin;
  git.value = updateLocalValue[0].github;
  cardName.innerHTML = updateLocalValue[0].name;
  cardJob.innerHTML = updateLocalValue[0].job;

}

crearLocalStorage();



// var json = JSON.parse(localStorage.getItem('localValue'));
// loadLocalStorage(json);

function reset() {

  var json = JSON.parse(localStorage.getItem('localValue'));
  json = [];
  var name = document.querySelector('#complete--name').value = "";
  var job = document.querySelector('#job').value = "";
  var email = document.querySelector('#email.input--stuffed').value = "";
  var tlf = document.querySelector('#tlf.input--stuffed').value = "";
  var lkd = document.querySelector('#lkd').value = "";
  var git = document.querySelector('#gith').value = "";
  var cardName = document.querySelector('#card--name').innerHTML = "Nombre Apellido";
  var cardJob = document.querySelector('#card--job').innerHTML = "Front-end developer";
  localStorage.setItem('localValue', JSON.stringify(json));

}
buttonReset.addEventListener('click', reset);