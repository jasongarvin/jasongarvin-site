// Set elements with animate classes to animate when they intersect the viewport

// Drop-in animation
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
  rootMargin: '0px 0px -20% 0px'
});

// Slide-in animation
const slidingElements = document.querySelectorAll('.animate-slide');
for (const element of slidingElements) {
  element.style.opacity = '0'
}

const pageviewObserver2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log('intersected')
      entry.target.classList.add('slide-into-frame');
      entry.target.style.opacity = '1';

      pageviewObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '0px 0px -10% 0px'
});

// Tell the observer to track all elements with animate classes
animatedElements.forEach(element => pageviewObserver.observe(element));
slidingElements.forEach(element => pageviewObserver2.observe(element));
