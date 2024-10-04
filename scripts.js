document.addEventListener('DOMContentLoaded', function() {
    // Home button
    document.getElementById('home-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Products button
    document.getElementById('products-button').addEventListener('click', function() {
        window.location.href = 'products.html';
    });

    // Specials button
    document.getElementById('specials-button').addEventListener('click', function() {
        window.location.href = 'specials.html';
    });

    // About Us button
    document.getElementById('about-button').addEventListener('click', function() {
        window.location.href = 'about_us.html';
    });

    // Contact button
    document.getElementById('contact-button').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
});