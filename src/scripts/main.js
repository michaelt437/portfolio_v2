import { clickNavItem } from "./modules/navigation.js";

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", clickNavItem);
});

document.addEventListener("mousemove", (e) => {
  document.querySelector(":root").style.setProperty("--hue", e.clientX * 0.09);
});
