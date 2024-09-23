// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Show the target section
        targetElement.classList.add('visible');
    });
});

// Intersection Observer for Fade-in Effect
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.1, // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
