import { initNavScript } from "./modules/navigation.js";
import { initProjects } from "./modules/projectSection.js";
import { initFooter } from "./modules/footer.js";

initNavScript();
initProjects();
initFooter();
//document.addEventListener("mousemove", (e) => {
//  document.querySelector(":root").style.setProperty("--hue", e.clientX * 0.09);
//});
