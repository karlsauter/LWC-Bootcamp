'use strict'

const menuButton = document.querySelector('header .menu-container .icon-menu')
const menu = document.querySelector('header .menu-container .menu')

//Function to toggle te menu
const toggleMenu = (event) => {
    if(event.target == menuButton || event.target == menu) {
        menu.classList.toggle('active')
        menuButton.classList.toggle('icon-menu')
        menuButton.classList.toggle('icon-close')
    }
}

menuButton.addEventListener('click', toggleMenu)
menu.addEventListener('click', toggleMenu)