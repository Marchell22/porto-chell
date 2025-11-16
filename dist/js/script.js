function safeDOM(selector) {
  return document.querySelector(selector);
}

//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Scroll Reveal Animations
window.addEventListener('scroll', function () {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(function (reveal) {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
});

// Typing Effect for Hero Section
document.addEventListener('DOMContentLoaded', function () {
  const typingText = document.getElementById('typing-text');
  const roles = ['Web Developer', 'Full Stack Developer', 'Front-End Developer', 'Back-End Developer'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    let displayText;

    if (isDeleting) {
      displayText = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      displayText = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    typingText.textContent = displayText;

    let typeSpeed = 100;
    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && displayText === currentRole) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && displayText === '') {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function () {
  const parallaxEl = safeDOM('.parallax-bg');
  if (parallaxEl) {
    let scrollPosition = window.pageYOffset;
    parallaxEl.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
});

// Project Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
  card.addEventListener('mouseenter', function () {
    this.classList.add('hover');
  });
  card.addEventListener('mouseleave', function () {
    this.classList.remove('hover');
  });
});
