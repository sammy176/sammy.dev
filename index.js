const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".header .nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
});

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100 && rect.bottom > 0;
}

const scrollElements = document.querySelectorAll(".scroll-animate");

function handleScroll() {
  scrollElements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("load", () => {
  const navbar = document.querySelector(".header");
  navbar.classList.add("show");

  handleScroll();
});

window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const footer = document.querySelector(".footer");

const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footer.classList.add("footer-show");
      }
    });
  },
  { threshold: 0.2 }
);

footerObserver.observe(footer);
