let button = document.querySelector(".nav-toggle");

let search = document.querySelector(".research");

button.addEventListener("click", function () {
  let list = document.querySelector(".dropdown-menu-content");
  list.classList.toggle("visible");
});

search.addEventListener("click", function () {
  let searchbar = document.querySelector(".search-container");
  searchbar.classList.toggle("visible");
});
