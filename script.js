AOS.init({
  duration: 1000,
  once: true,
});

const diaryBtn = document.getElementById("diaryBtn");
const overlay = document.getElementById("diaryOverlay");
const book = document.querySelector(".book");
const pages = document.querySelectorAll(".page");
const closeDiary = document.getElementById("closeDiary");

let current = 0;

diaryBtn.onclick = () => {
  overlay.style.display = "flex";
  setTimeout(() => {
    book.classList.add("open");
    showPage(0);
  }, 100); 
};


overlay.onclick = (e) => {
  if (e.target.id === "diaryOverlay" || e.target === closeDiary) {
    book.classList.remove("open");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1500);
  }
};


function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove("active", "flipped");

    if (i < index) {
      page.classList.add("flipped");
    } else if (i === index) {
      page.classList.add("active");
    }
  });

  current = index;
}


function nextPage() {
  if (current < pages.length - 1) showPage(current + 1);
}

function prevPage() {
  if (current > 0) showPage(current - 1);
}

function openPage(i) {
  showPage(i);
}


const bookingModal = document.getElementById("bookingModal");
const closeModal = document.querySelector(".close");

function openBooking() {
  bookingModal.style.display = "block";
}

closeModal.onclick = () => {
  bookingModal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === bookingModal) {
    bookingModal.style.display = "none";
  }
};

function toggleMenu() {
  const navUl = document.querySelector("nav ul");
  navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

window.addEventListener('load', () => {
});