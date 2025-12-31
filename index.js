const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".header .nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
});
