export function navOberserver() {
  let aboutLink = document.querySelector("#about");
  let projectLink = document.querySelector("#projectLink");
  let contactLink = document.querySelector("#contact");

  let observer = new IntersectionObserver(
    (entries, _) => {
      document.querySelector(".nav-item.active").classList.remove("active");
      let truthyIntersects = entries.filter((entry) => entry.isIntersecting);

      if (!truthyIntersects.length) {
        projectLink.classList.add("active");
      } else {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            if (entry.target.id === "hero") {
              aboutLink.classList.add("active");
            } else if (entry.target.id === "footer") {
              contactLink.classList.add("active");
            }
          }
        });
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(document.querySelector("#hero"));
  observer.observe(document.querySelector("#footer"));
}
