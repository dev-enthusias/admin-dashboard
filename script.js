'use strict';

function app() {
  // Elements
  const addUserForm = document.querySelector('.ad-new-user__form');
  const overlay = document.querySelector('.overlay');
  const btnOpen = document.querySelector('.ad-btn-add');
  const btnClose = document.querySelector('.ad-btn-close');

  function openAddNewUserForm() {
    addUserForm.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  function closeAddNewUserForm() {
    addUserForm.classList.add('hidden');
    overlay.classList.add('hidden');
  }

  // Events
  btnOpen.addEventListener('click', openAddNewUserForm);
  btnClose.addEventListener('click', closeAddNewUserForm);
}
app();
