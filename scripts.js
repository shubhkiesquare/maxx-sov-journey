// Add animation classes to elements when they come into view
document.addEventListener("DOMContentLoaded", function() {
    // Elements to animate
    const animateElements = [
        '.process-card',
        '.comparison-box',
        '.timeline-content',
        '.learning-card',
        '.roadmap-item',
        '.collaboration-card'
    ];
    
    // Add animation classes
    animateElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.classList.add('fade-in');
            
            // Add delay classes based on index (to create staggered effect)
            if (index % 4 === 0) el.classList.add('delay-1');
            else if (index % 4 === 1) el.classList.add('delay-2');
            else if (index % 4 === 2) el.classList.add('delay-3');
            else el.classList.add('delay-4');
        });
    });
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Handle scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
        );
    }
    
    // Initially check for elements in viewport
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.style.animationPlayState = 'running';
        } else {
            element.style.animationPlayState = 'paused';
        }
    });
    
    // Check on scroll
    window.addEventListener('scroll', function() {
        animatedElements.forEach(element => {
            if (isInViewport(element)) {
                element.style.animationPlayState = 'running';
            }
        });
    });
}

// Add smooth scrolling for navigation
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Add parallax effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.pageYOffset;
    
    // Move the background slower than the scroll rate
    if (header) {
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});
