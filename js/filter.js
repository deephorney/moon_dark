const genderList = document.querySelector(".list_gender");

const items = document.querySelectorAll(".container-card");

const genderListAll = document.querySelectorAll(".gender_item");

genderList.addEventListener("click", (event) => {
  const targetId = event.target.dataset.id;
  if (targetId == "allGender") {
    genderListAll.forEach(
      (genderItem) => (genderItem.style.textDecoration = "none")
    );
    event.target.style.textDecoration = "underline";
    items.forEach((item) => {
      item.style.display = "flex";
    });
  }
  if (targetId == "man") {
    genderListAll.forEach(
      (genderItem) => (genderItem.style.textDecoration = "none")
    );
    event.target.style.textDecoration = "underline";
    items.forEach((item) => {
      if (item.classList.contains("man")) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
  if (targetId == "woman") {
    genderListAll.forEach(
      (genderItem) => (genderItem.style.textDecoration = "none")
    );
    event.target.style.textDecoration = "underline";
    items.forEach((item) => {
      if (item.classList.contains("woman")) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
});
