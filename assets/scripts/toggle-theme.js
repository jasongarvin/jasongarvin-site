// Stores theme data locally to control light/dark theme
// And allows the user to toggle options

// Get the theme toggle button element
const themeToggle = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');

// Check if the user's theme preference is already set
const userThemePreference = localStorage.getItem('theme');

// If the preference is set, apply the theme
if (userThemePreference === 'dark') {
  document.body.classList.add('dark-theme');
  themeIcon.className = 'fa fa-moon-o';
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
  // Toggle the dark theme class on the body element
  document.body.classList.toggle('dark-theme');
  if (themeIcon.className === 'fa fa-sun-o') {
    themeIcon.className = 'fa fa-moon-o';
  } else {
    themeIcon.className = 'fa fa-sun-o';
  }

  // Save the user's theme preference to Local Storage
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});
