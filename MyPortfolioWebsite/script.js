// ========================
// TYPING ANIMATION
// ========================
const roles = [
  "Full Stack Developer",
  "Data Analyst",
  "Mobile App Developer",
  "Problem Solver",
  "Tech Innovator",
];
const typedEl = document.getElementById("typed-text");
let roleIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const current = roles[roleIndex];
  const speed = isDeleting ? 50 : 90;

  typedEl.textContent = current.slice(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1800);
    return;
  } else {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(type, speed);
}
type();

// ========================
// NAVBAR SCROLL EFFECT
// ========================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
  updateActiveNav();
});

// ========================
// ACTIVE NAV LINK
// ========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}

// ========================
// HAMBURGER MENU
// ========================
const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinksEl.classList.toggle("open");
  const spans = hamburger.querySelectorAll("span");
  spans[0].style.transform = navLinksEl.classList.contains("open")
    ? "translateY(7px) rotate(45deg)" : "";
  spans[1].style.opacity = navLinksEl.classList.contains("open") ? "0" : "1";
  spans[2].style.transform = navLinksEl.classList.contains("open")
    ? "translateY(-7px) rotate(-45deg)" : "";
});

// Close menu on link click
navLinksEl.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinksEl.classList.remove("open");
    hamburger.querySelectorAll("span").forEach((s) => {
      s.style.transform = "";
      s.style.opacity = "1";
    });
  });
});

// ========================
// SCROLL REVEAL ANIMATIONS
// ========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".fade-in-up").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

// ========================
// CONTACT FORM
// ========================
const form = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  setTimeout(() => {
    form.reset();
    successMsg.classList.add("show");
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    setTimeout(() => successMsg.classList.remove("show"), 5000);
  }, 1400);
});

// ========================
// SKILL TAG HOVER RIPPLE
// ========================
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });
  tag.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

console.log("✨ Portfolio Loaded — Omphile Hlongwane");