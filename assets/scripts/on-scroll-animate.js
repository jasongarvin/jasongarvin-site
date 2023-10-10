// Sets certain elements to animate when they intersect with the viewport

const pageviewWipeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('drop-into-frame');
        }
    });
});

// Tell the observer which elements to track
pageviewWipeObserver.observe(document.querySelector('.animate-drop'));
