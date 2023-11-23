const theme = document.querySelector(".theme");
const currentTheme = localStorage.getItem("theme");

const btn_night = document.querySelector(".theme__button__night");
const btn_light = document.querySelector(".theme__button__light");

const img_logo = document.querySelector(".black_hole_img");
const cart_logo = document.querySelector(".cart_icon");

const img_logo_footer = document.querySelector(".footer_logo_img");
const img_logo_yt = document.querySelector(".social-logo-yt");
const img_logo_vk = document.querySelector(".social-logo-vk");
const img_logo_tg = document.querySelector(".social-logo-tg");

const theme_color_mob = document.querySelector('meta[name="theme-color"]');

function setTheme(name) {
  theme.setAttribute("data-theme", name);
  localStorage.setItem("theme", name);
}

if (currentTheme) {
  theme.setAttribute("data-theme", currentTheme);
  if (currentTheme == "dark") {
    btn_night.style.display = "none";
    btn_light.style.display = "inline";
    img_logo.style.filter = "invert(1)";
    img_logo_footer.style.filter = "invert(1)";
    img_logo_yt.style.filter = "invert(1)";
    img_logo_vk.style.filter = "invert(1)";
    img_logo_tg.style.filter = "invert(1)";
    cart_logo.setAttribute("stroke", "#ffffff");
    theme_color_mob.setAttribute("content", "#000000");
  } else {
    btn_light.style.display = "none";
    btn_night.style.display = "inline";
    img_logo.style.filter = "invert(0)";
    img_logo_footer.style.filter = "invert(0)";
    img_logo_yt.style.filter = "invert(0)";
    img_logo_vk.style.filter = "invert(0)";
    img_logo_tg.style.filter = "invert(0)";
    cart_logo.setAttribute("stroke", "#000000");
    theme_color_mob.setAttribute("content", "#ffffff");
  }
} else {
  setTheme("light");
}

btn_night.addEventListener("click", () => {
  setTheme("dark");
  btn_night.style.display = "none";
  btn_light.style.display = "inline";
  img_logo.style.filter = "invert(1)";
  img_logo_footer.style.filter = "invert(1)";
  img_logo_yt.style.filter = "invert(1)";
  img_logo_vk.style.filter = "invert(1)";
  img_logo_tg.style.filter = "invert(1)";
  cart_logo.setAttribute("stroke", "#ffffff");
  theme_color_mob.setAttribute("content", "#000000");
});

btn_light.addEventListener("click", () => {
  setTheme("light");
  btn_light.style.display = "none";
  btn_night.style.display = "inline";
  img_logo.style.filter = "invert(0)";
  img_logo_footer.style.filter = "invert(0)";
  img_logo_yt.style.filter = "invert(0)";
  img_logo_vk.style.filter = "invert(0)";
  img_logo_tg.style.filter = "invert(0)";
  cart_logo.setAttribute("stroke", "#000000");
  theme_color_mob.setAttribute("content", "#ffffff");
});
