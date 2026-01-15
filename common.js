
fetch("navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar").innerHTML = html;
    const hamburger = document.getElementById("hamburger");
    const links = document.querySelector(".nav-links");

    if (hamburger && links) {
      hamburger.addEventListener("click", () => {
        links.classList.toggle("active");
      });
    }
  });
fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });
