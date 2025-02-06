// Hamburger Menu for Mobile
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav ul');
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '&#9776;'; // Hamburger icon
    document.querySelector('header').appendChild(hamburger);

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
