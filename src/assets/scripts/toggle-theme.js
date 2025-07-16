/* Manages light/dark theme state
Checks if browser supports custom properties
Then enables a toggle button to control theme */

const themeToggle = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');

const supportsCustomProps = CSS.supports('--text: #e6e9de');
console.log(supportsCustomProps);

if (supportsCustomProps === false) {
  themeToggle.style.display = 'none';
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
  if (matches) {
    document.body.classList.add('dark-theme');
    themeIcon.className = 'fa fa-sun-o';

    console.log("change to dark mode!");
  } else {
    document.body.classList.remove('dark-theme');
    themeIcon.className = 'fa fa-moon-o';

    console.log("change to light mode!");
  }
})

const userThemePreference = localStorage.getItem('theme');

if (userThemePreference === 'dark') {
  document.body.classList.add('dark-theme');
  themeIcon.className = 'fa fa-sun-o';
}

themeToggle.addEventListener('click', () => {
  // Toggle the dark theme class on the body element
  document.body.classList.toggle('dark-theme');

  if (themeIcon.className === 'fa fa-moon-o') {
    themeIcon.className = 'fa fa-sun-o';
  } else {
    themeIcon.className = 'fa fa-moon-o';
  }

  let currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});

