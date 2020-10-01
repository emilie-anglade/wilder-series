let button = document.querySelector(".nav-toggle");

button.addEventListener("click", function () {
  let list = document.querySelector(".dropdown-menu-content");
  list.classList.toggle("visible");
});

  