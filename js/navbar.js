const menuToggle= document.querySelector(".menu-bars");
const nav = document.querySelector(".navbar ul");


menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
  });