// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Slider Functionality
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function changeSlide(index) {
    slides[currentIndex].classList.remove("active");
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
    changeSlide(currentIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
    changeSlide(currentIndex - 1);
});

// Auto-slide every 5 seconds
setInterval(() => {
    changeSlide(currentIndex + 1);
}, 5000);

// Form Submission Feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    alert("Thank you! Your message has been sent.");
});