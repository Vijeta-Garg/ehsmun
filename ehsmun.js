document.addEventListener('DOMContentLoaded', function() {
    // Add typing animation class to committee topics
    const topics = document.querySelectorAll('.topics');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('committee-typing', 'animate');
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of element is visible
    });
    
    // Observe each topic
    topics.forEach(topic => {
        observer.observe(topic);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});