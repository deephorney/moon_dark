const card = document.querySelector(".container-card");

card.addEventListener("click", (e) => {
  const modal = e.target
    .closest(".container-card")
    .querySelector(".modal_page");
  modal.style.display = "block";
});

const closeApig = document.querySelector(".close");

closeApig.addEventListener("click", (e) => {
  const modal = e.target
    .closest(".container-card")
    .querySelector(".modal_page");
  modal.style.display = "none";
});
