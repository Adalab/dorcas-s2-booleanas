'use strict';
const datos = document.querySelectorAll('.input--stuffed');
const btnCreaTarjeta = document.querySelector('.form2__button');
const buttonReset = document.querySelector('.js-button-reset');
// const form = document.querySelector('.form');

const localValue = {
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

const saveLocalStorage = (id, value) => {
  // console.log('id y value', id, value);
  const updateLocalValue = [];
  console.log(updateLocalValue);
  localValue[id] = value;
  // console.log(localValue);
  updateLocalValue[0] = localValue;
  // console.log(updateLocalValue);
  localStorage.setItem('localValue', JSON.stringify(updateLocalValue));
  // var form = document.querySelector('.form');
  // console.log(updateLocalValue);
};

const crearLocalStorage = () => {
  const json = JSON.parse(localStorage.getItem('localValue'));
  const updateLocalValue = json;
  // console.log('get localstorage', updateLocalValue);
  // console.log(updateLocalValue[0].name);
  const name = document.querySelector('#complete--name');
  const job = document.querySelector('#job');
  const email = document.querySelector('#email.input--stuffed');
  const tlf = document.querySelector('#tlf.input--stuffed');
  const lkd = document.querySelector('#lkd');
  const git = document.querySelector('#gith');
  const cardName = document.querySelector('#card--name');
  const cardJob = document.querySelector('#card--job');

  name.value = updateLocalValue[0].name;
  job.value = updateLocalValue[0].job;
  email.value = updateLocalValue[0].email;
  tlf.value = updateLocalValue[0].phone;
  lkd.value = updateLocalValue[0].linkedin;
  git.value = updateLocalValue[0].github;
  cardName.innerHTML = updateLocalValue[0].name;
  cardJob.innerHTML = updateLocalValue[0].job;
};

// var json = JSON.parse(localStorage.getItem('localValue'));
// loadLocalStorage(json);

const reset = () => {
  var json = JSON.parse(localStorage.getItem('localValue'));
  const name = document.querySelector('#complete--name').value = '';
  const job = document.querySelector('#job').value = '';
  const email = document.querySelector('#email.input--stuffed').value = '';
  const tlf = document.querySelector('#tlf.input--stuffed').value = '';
  const lkd = document.querySelector('#lkd').value = '';
  const git = document.querySelector('#gith').value = '';
  const cardName = document.querySelector('#card--name').innerHTML = 'Nombre Apellido';
  const cardJob = document.querySelector('#card--job').innerHTML = 'Front-end developer';
  json = [];
  localStorage.setItem('localValue', JSON.stringify(json));
};

crearLocalStorage();

buttonReset.addEventListener('click', reset);
