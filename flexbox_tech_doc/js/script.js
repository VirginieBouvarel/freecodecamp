"use strict";

const icon = document.querySelector('#burger');
const nav = document.querySelector('.nav-list');


icon.addEventListener('click', toggleNav);

function toggleNav() {

    // 1- toggle icon
   icon.classList.toggle('fa-bars');
   icon.classList.toggle('fa-times');

    // 2- toggle nav
    nav.classList.toggle('open');
}