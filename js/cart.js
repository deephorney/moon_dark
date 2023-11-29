let size = ["S", "M", "L"];

let id = [1, 2, 3, 4, 5, 6, 7, 8];

let arrayItem = [];

const cart = document.querySelector(".carting");

const spaceText = document.querySelector(".space_text_cart");

for (let i = 0; i < id.length; i++) {
  for (let j = 0; j < size.length; j++) {
    let key = id[i] + size[j];
    if (localStorage.getItem(key)) {
      spaceText.style.display = "none";
      let item = JSON.parse(localStorage.getItem(key));
      const cartItemHTML = `       
    <div data-id="${key}" class="cart-element">
    <div style="font-size: 0;" class="image-element">
      <img style="height: 132px;" src="${item.img}" alt="" />
    </div>
    <div class="text_about_element">
      <div>
        <p class="title-element">Название: ${item.name}</p>
      </div>
      <div>
      <p class="title-size-element">Размер: ${item.size}</p>
      </div>
      <div>
        <p class="count-element">Количество: ${item.count}</p>
      </div>
      <div >
        <p class="price-element">Цена: ${item.price * item.count}</p>
      </div>
    </div>
    <div>
      <button onclick="delCartItem(this)" class="delete"><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-trash-2"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </svg>
      </button>
    </div>
  </div>`;
      cart.insertAdjacentHTML(`beforeend`, cartItemHTML);
    }
  }
}

function delCartItem(e) {
  const item = e.closest(".cart-element");
  const temp = item.getAttribute("data-id");
  console.log(temp);
  localStorage.removeItem(temp);
  item.remove();
  if (!document.querySelector(".cart-element")) {
    spaceText.style.display = "block";
  }
}
