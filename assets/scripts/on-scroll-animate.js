// Sets certain elements to animate when they intersect with the viewport

const animatedElements = document.querySelectorAll('.animate-drop');
for (const element of animatedElements) {
  element.style.opacity = '0';
}

const pageviewObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log('intersected')
      entry.target.classList.add('drop-into-frame');
      entry.target.style.opacity = '1';

      pageviewObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '0px 0px -30% 0px'
});

// Tell the observer to track all elements with the class `.animate-drop`
animatedElements.forEach(element => pageviewObserver.observe(element));
