
const series = JSON.parse(localStorage.getItem("favourites"));

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
  
  cardList.appendChild(card);
  card.appendChild(link);
  link.appendChild(image);
};

series.forEach(createCard);
