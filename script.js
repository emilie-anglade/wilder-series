const button = document.querySelector(".nav-toggle");
const borderRadius = document.querySelector(".navbar");

button.addEventListener("click", function () {
  let list = document.querySelector(".dropdown-menu-content");
  list.classList.toggle("visible");
  borderRadius.classList.toggle("open");
});
