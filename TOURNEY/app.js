// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example function to show an alert when a section is clicked
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', function() {
        alert(`You clicked on the ${this.id} section`);
    });
});