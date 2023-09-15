// Toggles light and dark theme throughout page

// Get the theme toggle button element
const themeToggle = document.getElementById('theme-toggle');

// Function to toggle the dark theme
function toggleDarkTheme() {
  document.body.classList.toggle('dark-theme');
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', toggleDarkTheme);
