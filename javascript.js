const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
