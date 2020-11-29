let button = document.getElementById('button');
let containerUm = document.querySelector('.flex-container-um');
let containerDois = document.querySelector('.flex-container-dois');

button.addEventListener('click', function () {
  if (containerUm.className === 'flex-container-um') {
    containerUm.classList.remove('flex-container-um');
    containerUm.classList.add('flex-container-dois');
  } else {
    containerUm.classList.remove('flex-container-dois');
    containerUm.classList.add('flex-container-um');
  }
  if (containerDois.className === 'flex-container-dois') {
    containerDois.classList.remove('flex-container-dois');
    containerDois.classList.add('flex-container-um');
  } else {
    containerDois.classList.remove('flex-container-um');
    containerDois.classList.add('flex-container-dois');
  }
});
