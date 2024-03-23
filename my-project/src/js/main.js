import "../css/main.css";
import "../../style.css";

const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenuIcon = document.getElementById("close-mobile-menu-icon");

hamburgerIcon.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
});

closeMobileMenuIcon.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});
