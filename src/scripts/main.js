import { initNavScript } from "./modules/navigation.js";

initNavScript();
document.addEventListener("mousemove", (e) => {
  document.querySelector(":root").style.setProperty("--hue", e.clientX * 0.09);
});
