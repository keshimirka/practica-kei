// код смены цветов плиток srvices
const plates = document.querySelectorAll('.buttonsrv')

plates.forEach(element => {
  element.addEventListener('mouseover', e => {
  element.querySelector('img').src = 'icons/phonewh.png'
  element.querySelector('img').animate([
    {opacity: 100},
    {opacity: 0},
    {opacity: 100}
  ],{
    duration: 340,
  });
  element.querySelector('.srvbutton').classList.add('srvbuttonbgc');
  })
  element.addEventListener('mouseout', e => {
  element.querySelector('img').src = 'icons/phonebl.png'
  element.querySelector('img').animate([
    {opacity: 100},
    {opacity: 0},
    {opacity: 100}
  ],{
    duration: 340,
  });
  element.querySelector('.srvbutton').classList.remove('srvbuttonbgc');
  })
})

// код приветсвия 
const hdg = document.querySelector('b');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  hdg.textContent = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  hdg.textContent = 'Hello, ' + storedName;
}

document.querySelector('button').onclick = function() {
  setUserName();
}

//анимация стрелки
window.onload = function () {
  const imgan = document.querySelector('.imgan');
  imgan.animate([
    {top: '140'},
    {top: '150px'},
    {top: '140'}
  ],{
    duration: 1200,
    iterations: Infinity
  });
}
