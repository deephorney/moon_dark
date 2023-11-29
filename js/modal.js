"use stict";

const card = document.querySelector(".container");
const mainOverflow = document.querySelector("body");
let active = false;

function openModal(e) {
  if (e.target.classList != "close" && e.target.classList != "buy_item") {
    const modal = e.target
      .closest(".container-card")
      .querySelector(".modal_page");
    modal.style.display = "block";
    mainOverflow.style.overflow = "hidden";
    active = true;

    const closeModel = modal.querySelector(".close");
    closeModel.addEventListener("click", closeModal);

    const btnBuy = modal.querySelector(".buy_item");
    btnBuy.addEventListener("click", buyItem);
  }
}

function closeModal(e) {
  if (e) {
    const modal = e.target
      .closest(".container-card")
      .querySelector(".modal_page");
    modal.style.display = "none";
    mainOverflow.style.overflow = "visible";
    active = false;
    const closeModel = modal.querySelector(".close");
    closeModel.removeEventListener("click", closeModal);

    const btnBuy = modal.querySelector(".buy_item");
    btnBuy.removeEventListener("click", buyItem);
  }
}

function buyItem(e) {
  e.preventDefault();

  const form = e.target
    .closest(".container-card")
    .querySelector(".modal_page")
    .querySelector("form");

  let selectedSize;

  let sizeRadios = form.elements["contact"];
  let i = 0;
  for (i; i < sizeRadios.length; i++) {
    if (sizeRadios[i].type == "radio" && sizeRadios[i].checked) {
      selectedSize = sizeRadios[i].value;
      break;
    }
  }

  if (selectedSize) {
    const modal = e.target
      .closest(".container-card")
      .querySelector(".modal_page");
    closeModal(e);

    const chip = document.createElement("div");
    chip.classList.add("attention");
    const nameClothe = modal.querySelector(".name_modal_clothes").textContent;
    chip.innerText = `Вещь "${nameClothe}" добавлена в корзину!`;
    document.querySelector(".attention-container").appendChild(chip);
    let item = {
      id: modal.getAttribute("id"),
      name: nameClothe,
      price: modal.querySelector(".price").textContent,
      size: sizeRadios[i].getAttribute("id"),
      img: modal.querySelector(".image_clothes").getAttribute("src"),
      count: 1,
    };
    console.log(item);
    setTimeout(() => {
      chip.remove();
    }, 2000);
  } else {
    const chip = document.createElement("div");
    chip.classList.add("attention");
    chip.innerText = `Выберите размер!`;
    document.querySelector(".attention-container").appendChild(chip);
    setTimeout(() => {
      chip.remove();
    }, 2000);
  }
}

card.addEventListener("click", function open(event) {
  if (!active) {
    openModal(event);
  }
});
