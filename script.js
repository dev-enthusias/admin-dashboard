'use strict'

//Toggle modal
const addUserForm = document.querySelector('.ad-new-user__form');
const toggleFormBtn = document.querySelector('.ad-btn-add')

toggleFormBtn.addEventListener('click', function() {
    addUserForm.classList.toggle('hidden');
})