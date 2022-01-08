let hideMobileNav = false;
const navContainer = document.querySelector(".nav-items");
const navItems = document.querySelectorAll(".nav-item");
const navMenuIcon = document.querySelector(".nav-menu");
const navMenuIconPath = navMenuIcon.querySelector("path");
const SVGMENU = "M4 8h16M4 16h16";
const SVGCLOSE = "M6 18L18 6M6 6l12 12";

function clickNavItem(e) {
  document.querySelector(".nav-item.active").classList.remove("active");
  e.target.classList.add("active");
  if (navContainer.classList.contains("show")) {
    toggleMenu();
  }
}

function toggleMenu() {
  hideMobileNav = !hideMobileNav;
  if (hideMobileNav) {
    navContainer.classList.add("show");
    toggleIcon();
  } else {
    toggleIcon();
    navContainer.classList.remove("show");
  }
}

function toggleIcon() {
  if (hideMobileNav) navMenuIconPath.setAttribute("d", SVGCLOSE);
  else navMenuIconPath.setAttribute("d", SVGMENU);
}

export function initNavScript() {
  navMenuIcon.addEventListener("click", toggleMenu);
  navItems.forEach((item) => {
    item.addEventListener("click", clickNavItem);
  });
}
