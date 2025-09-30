// script.js

// ========== Navbar Toggle ==========
const menuBtn = document.querySelector(".menu-btn");   // your hamburger icon
const navLinks = document.querySelector(".nav-links"); // your menu links container

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });
}

// ========== Sticky Navbar on Scroll ==========
const navbar = document.querySelector(".nav-bar-bgc");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ========== Buttons (Primary / Secondary) ==========
const primaryBtns = document.querySelectorAll(".primary-button1");
const secondaryBtns = document.querySelectorAll(".secoundary-button1");

// Add click effect for all primary buttons
primaryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Primary Button Clicked");
  });
});

// Add click effect for all secondary buttons
secondaryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Secondary Button Clicked");
  });
});

// ========== Hero Section Text Animation ==========
window.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".where-grow");
  if (heroText) {
    heroText.style.opacity = "0";
    heroText.style.transition = "opacity 1.5s ease-in-out";

    setTimeout(() => {
      heroText.style.opacity = "1";
    }, 300);
  }
});
