'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//REASON WE NEED A FOR LOOP:
//querySelectorAll saves as a node list, which is like an array.
//addEventListener can only work on single elements.
//So, we need to loop through the whole list to add to each one.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//global events: occurs on the whole document.
//3 types of keyboard events:
//keyup = executes when the key is released.
//keydown = executes when the key is pressed.
//keypress = executes continuously as the key is held down.
//.key = what key was pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
