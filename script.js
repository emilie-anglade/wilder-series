//SELECTORS
const button = document.querySelector(".nav-toggle");
const borderRadius = document.querySelector(".navbar");
const favoriteLogo = document.querySelector(".favorite-logo");
const imageContainer = document.querySelector("link-page");

//ADD EVENTS LISTENERS
button.addEventListener("click", function () {
  let list = document.querySelector(".dropdown-menu-content");
  list.classList.toggle("visible");
  borderRadius.classList.toggle("open");
});

const favoriteButton = () => {
  favoriteLogo.addEventListener("click", (event) => {
    imageContainer.removeAttribute("href");
    event.target.style.color = "red";
  });
};
