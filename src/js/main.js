import "/src/sass/style.scss";


const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});