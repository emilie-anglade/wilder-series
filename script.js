//SELECTORS
const button = document.querySelector(".nav-toggle");
const borderRadius = document.querySelector(".navbar");
const favoriteLogo = document.querySelector(".favorite-logo");

//ADD EVENTS LISTENERS
button.addEventListener("click", function () {
  let list = document.querySelector(".dropdown-menu-content");
  list.classList.toggle("visible");
  borderRadius.classList.toggle("open");
});

const favoriteButton = () => {
  const imageContainer = document.querySelector("#house-heart");
  favoriteLogo.addEventListener("click", (event) => {
    imageContainer.removeAttribute("house-heart");
    event.target.style.color = "red";
  });
};
