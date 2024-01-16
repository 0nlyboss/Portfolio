const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const menuLinks = document.querySelector('.menu-links');

// Check if dark mode is saved in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial dark mode state
setDarkMode(isDarkMode);

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');

    if (this.classList.contains('bi-moon')) {
        // Enable dark mode
        updateStyles('black', 'white');
        setMenuStyles('#333', 'white'); // Set dark mode menu styles
        localStorage.setItem('darkMode', true);
    } else {
        // Enable light mode
        updateStyles('white', 'black');
        setMenuStyles('#fff', 'black'); // Set light mode menu styles
        localStorage.setItem('darkMode', false);
    }
});

function setDarkMode(isDarkMode) {
    if (isDarkMode) {
        toggle.classList.add('bi-moon');
        updateStyles('black', 'white');
        setMenuStyles('#333', 'white'); // Set dark mode menu styles
    } else {
        toggle.classList.remove('bi-moon');
        updateStyles('white', 'black');
        setMenuStyles('#fff', 'black'); // Set light mode menu styles
    }
}

function updateStyles(bgColor, textColor) {
    body.style.background = bgColor;
    body.style.color = textColor;
}

function setMenuStyles(bgColor, textColor) {
    menuLinks.style.backgroundColor = bgColor;
    menuLinks.querySelectorAll('li a').forEach(link => {
        link.style.color = textColor;
    });
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }