export function clickNavItem(e) {
  document.querySelector(".nav-item.active").classList.remove("active");
  e.target.classList.add("active");
}
