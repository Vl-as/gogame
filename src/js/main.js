import "/src/sass/style.scss";


const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});



const cards = document.querySelectorAll(".pricing__card");

cards.forEach((card) => {
  const btn = card.querySelector(".pricing__card-btn");

  btn.addEventListener("click", () => {
    const isSelected = card.classList.contains("selected");

    if (isSelected) {
      // Снять выбор с текущей карточки
      card.classList.remove("selected");
      btn.textContent = "Select This Plan";
    } else {
      // Убрать выбор со всех карточек
      cards.forEach((c) => {
        c.classList.remove("selected");
        c.querySelector(".pricing__card-btn").textContent = "Select This Plan";
      });

      // Выбрать текущую карточку
      card.classList.add("selected");
      btn.textContent = "Selected";
    }
  });
});
