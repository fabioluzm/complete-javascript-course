'use strict';

// Define elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

// OPEN MODAL BUTTONS
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// CLOSE MODAL BUTTON
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// KEYPRESS EVENT
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
