const menuToggleButton = document.querySelector(".menu-toggle-button");
const menu = document.querySelector(".navigation ul");

menuToggleButton.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("active");
});
