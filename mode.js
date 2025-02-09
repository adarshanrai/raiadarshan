const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme'); // Toggling the 'light-theme' class
    const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : '';
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light-theme') {
        themeIcon.src = "image/sun.png"; // Path to your sun icon
        themeIcon.alt = "Light Mode";
    } else {
        themeIcon.src = "image/dark.png"; // Path to your moon icon
        themeIcon.alt = "Dark Mode";
    }
}