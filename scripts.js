document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Keep your existing navigation button code below
    document.getElementById('home-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('products-button').addEventListener('click', function() {
        window.location.href = 'products.html';
    });

    document.getElementById('specials-button').addEventListener('click', function() {
        window.location.href = 'specials.html';
    });

    document.getElementById('about-button').addEventListener('click', function() {
        window.location.href = 'about_us.html';
    });

    document.getElementById('contact-button').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
});