document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

document.addEventListener("mousemove", (e) => {
  // document.documentElement.style.setProperty("--hue", e.clientX * 0.09);
  document.documentElement.style.setProperty("--degrees", e.clientX + "deg");
});
