//SELECTORS
const button = document.querySelector(".nav-toggle");
const borderRadius = document.querySelector(".navbar");
const favoriteLogo = document.querySelector(".favorite-logo");
const logoHeart = document.querySelector(".heart");

//ADD EVENTS LISTENERS
button.addEventListener("click", function () {
  let list = document.querySelector(".dropdown-menu-content");
  list.classList.toggle("visible");
  borderRadius.classList.toggle("open");
});

logoHeart.addEventListener("click", (event) => {
  event.target.classList.toggle("like") = "#c739ff";
});

// Add to favourites function

const favLogo = document.querySelector(".favorite-logo");

// favLogo.addEventListener("click", function () {
//   let card = document.createElement("article");
//   let;
// });
const favourites = localStorage.getItem("favourites");

if (!favourites) {
  localStorage.setItem("favourites", JSON.stringify([]));
}
