document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const links = document.querySelector(".nav-links");

  if (hamburger && links) {
    hamburger.addEventListener("click", () => {
      links.classList.toggle("active");
    });
  }

  // Blur effect on scroll
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;

    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

});
