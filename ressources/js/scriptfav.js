const series = [
  {
    name: "Dr House",
    image: "./ressources/images/house-image-resized.jpg",
    href: "./article-house.html",
  },
  {
    name: "Narcos",
    image: "./ressources/images/narcos-image.jpg",
    href: "./article-narcos.html",
  },
  {
    name: "Game of Thrones",
    image: "./ressources/images/got-image.jpg",
    href: "./article-got.html",
  },
  {
    name: "Lucifer",
    image: "./ressources/images/lucifer-image.jpg",
    href: "./article-lucifer.html",
  },
];

const cardList = document.querySelector(".card-list");

const createCard = (serie) => {
  const card = document.createElement("article");
  const link = document.createElement("a");
  const image = document.createElement("img");

  card.classList.add("card");
  link.classList.add("link-pagefav");
  image.classList.add("image-container-favourite");

  image.src = serie.image;

  link.href = serie.href;
  //link.innerHTML = image;

  cardList.appendChild(card);
  card.appendChild(link);
  link.appendChild(image);
};

series.forEach(createCard);
