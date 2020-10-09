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

// NEWSLETTER

const newsletter = document.querySelector("#submit");

newsletter.addEventListener("click", function () {
  alert("Congrats, you have successfully subscribed to our newsletter ❤️ ");
});

// Add to favourites function

const favLogoHouse = document.querySelector(".fav-house");
const favLogoGot = document.querySelector(".fav-got");
const favLogoNarcos = document.querySelector(".fav-narcos");
const favLogoLucifer = document.querySelector(".fav-lucifer");

favLogoNarcos.addEventListener("click", function () {
  let existing = localStorage.getItem("favourites");
  existing = JSON.parse(existing);
  existing.push({
    image: "./ressources/images/narcos-image.resized.jpg",
    href: "./article-narcos.html",
  });
  localStorage.setItem("favourites", JSON.stringify(existing));
});

favLogoHouse.addEventListener("click", function () {
  let existing = localStorage.getItem("favourites");
  existing = JSON.parse(existing);
  existing.push({
    image: "./ressources/images/house-image.resized.jpg",
    href: "./article-house.html",
  });
  localStorage.setItem("favourites", JSON.stringify(existing));
});

favLogoGot.addEventListener("click", function () {
  let existing = localStorage.getItem("favourites");
  existing = JSON.parse(existing);
  existing.push({
    image: "./ressources/images/got-image.resized.jpg",
    href: "./article-got.html",
  });
  localStorage.setItem("favourites", JSON.stringify(existing));
});

favLogoLucifer.addEventListener("click", function () {
  let existing = localStorage.getItem("favourites");
  existing = JSON.parse(existing);
  existing.push({
    image: "./ressources/images/lucifer-image.resized.jpg",
    href: "./article-lucifer.html",
  });
  localStorage.setItem("favourites", JSON.stringify(existing));
});
