document.addEventListener('DOMContentLoaded', () => {
  // Menu Toggle
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('fa-xmark');
      navbar.classList.toggle('active');
  });

  // Active Link Highlighting on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 150;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });

      // Sticky Header
      const header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);

      // Close Mobile Menu on Scroll
      menuIcon.classList.remove('fa-xmark');
      navbar.classList.remove('active');
  });

  // ScrollReveal Animations
  ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .project-box, .skill-item, .contact-info', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content, .contact form', { origin: 'right' });

  // Typed.js for Home Section
  const typed = new Typed('.multiple-text', {
      strings: ['Full-Stack Developer', 'Web Developer', 'Mobile Developer', 'Problem Solver'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
  });

  // Progress Bar Animation on Scroll
  const progressBars = document.querySelectorAll('.progress');
  const animateProgressBars = () => {
      progressBars.forEach(bar => {
          const rect = bar.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              bar.style.width = bar.style.width; // Trigger animation
          }
      });
  };

  window.addEventListener('scroll', animateProgressBars);
  animateProgressBars(); // Initial check

  // Contact Form Validation
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const subject = document.querySelector('#subject').value.trim();
      const message = document.querySelector('#message').value.trim();

      if (name === '' || email === '' || subject === '' || message === '') {
          alert('Please fill in all fields.');
          return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      // Simulate form submission (replace with actual backend logic)
      alert('Message sent successfully! I will get back to you soon.');
      form.reset();
  });
});