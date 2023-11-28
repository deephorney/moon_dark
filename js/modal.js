const card = document.querySelector(".container");

const mainOverflow = document.querySelector("body");
let closeModel;
let active = 0;
card.addEventListener("click", (e) => {
  const modal = e.target
    .closest(".container-card")
    .querySelector(".modal_page");
  if (active == 0) {
    active = 1;
    modal.style.display = "block";
    mainOverflow.style.overflow = "hidden";
  }
  closeModel = modal.querySelector(".close");
  closeModel.addEventListener("click", (e) => {
    const modal = e.target
      .closest(".container-card")
      .querySelector(".modal_page");
    if (active == 1) {
      modal.style.display = "none";
      mainOverflow.style.overflow = "visible";
      active = 0;
    }
    e.stopPropagation();
  });
});
