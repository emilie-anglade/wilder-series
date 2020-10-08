let button = document.querySelector(".nav-toggle");

button.addEventListener("click", function () {
  let list = document.querySelector(".dropdown-menu-content");
  list.classList.toggle("visible");
});

/*commentaires*/
function addCom(e) {
  let myCom = document.getElementById('com').value;
  document.getElementById('testcom').style.display = 'flex';
  document.getElementById('nouveaucom').innerHTML = myCom;
}