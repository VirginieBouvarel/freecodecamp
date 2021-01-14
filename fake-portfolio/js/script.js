"use strict";

const icon = document.querySelector('#icon');
const menu = document.querySelector('.menu');


icon.addEventListener('click', toggleNav);

function toggleNav() {

    // 1- toggle icon
   icon.classList.toggle('fa-bars');
   icon.classList.toggle('fa-times');

    // 2- toggle nav
    menu.classList.toggle('open');
}