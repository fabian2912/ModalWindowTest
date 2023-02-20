'use strict';

 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModal = document.querySelector('.close-modal');
 const btnsOpenModal = document.querySelectorAll('.show-modal');

 const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
 }

 const openModal = function() {
    modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
 }

 for(let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].addEventListener('click', function() {
        console.log(btnsOpenModal[i].textContent);
        openModal();
    })); 
 }

 btnCloseModal.addEventListener('click', closeModal); //note: not closeModal()
 overlay.addEventListener('click',closeModal); 

