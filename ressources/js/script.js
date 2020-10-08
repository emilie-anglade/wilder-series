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

const favLogoHouse = document.querySelector(".fav-house");
const favLogoGot = document.querySelector(".fav-got");
const favLogoNarcos = document.querySelector(".fav-narcos");
const favLogoLucifer = document.querySelector(".fav-lucifer");

if (!favourites) {
  localStorage.setItem("favourites", JSON.stringify([]));
}

favLogoHouse.addEventListener("click", function () {
  localStorage.setItem(
    "favourites",
    JSON.stringify.push({
      image: "./ressources/images/house-image.resized.jpg",
      href: "./article-house.html",
    })
  );
});

favLogoGot.addEventListener("click", function () {
  localStorage.setItem(
    "favourites",
    JSON.stringify.push({
      image: "./ressources/images/got-image.resized.jpg",
      href: "./article-got.html",
    })
  );
});

favLogoNarcos.addEventListener("click", function () {
  localStorage.setItem(
    "favourites",
    JSON.stringify.push({
      image: "./ressources/images/narcos-image.resized.jpg",
      href: "./article-narcos.html",
    })
  );
});

favLogoLucifer.addEventListener("click", function () {
  localStorage.setItem(
    "favourites",
    JSON.stringify.push({
      image: "./ressources/images/lucifer-image.resized.jpg",
      href: "./article-lucifer.html",
    })
  );
});
