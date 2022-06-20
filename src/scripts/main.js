import sal from "sal.js";
import { initNavScript } from "./modules/navigation.js";
import { initProjects } from "./modules/projectSection.js";
import { initFooter } from "./modules/footer.js";
import { navOberserver } from "./modules/observers.js";
import resume from "../resume.pdf";

initNavScript();
initProjects();
initFooter();
navOberserver();
sal();
//document.addEventListener("mousemove", (e) => {
//  document.querySelector(":root").style.setProperty("--hue", e.clientX * 0.09);
//});

document.querySelector("#resume").addEventListener("click", () => {
  window.open(resume);
});

window.scrollToProjects = () => {
  document.getElementById("projects-anchor").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
