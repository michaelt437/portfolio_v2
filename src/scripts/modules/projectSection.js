const projectSectionId = document.querySelector("#projects");

const GITHUBHOST = "https://github.com/michaelt437";

const projectsBin = [
  {
    name: "Movie Nights Roulette",
    description:
      "Using data from TMDB, I built this application to easily add movies to a pool and let fate decide tonight's movies with the press of a button.'",
    siteUrl: "https://movienights.netlify.app",
    githubUrl: `${GITHUBHOST}/movie-nights-pwa`,
    imagePath: "../../img/mnhome.png",
    stack: ["vue", "typescript", "tailwindcss", "firebase"],
  },
  {
    name: "Comics Library",
    description: "",
    siteUrl: "https://comicslib.netlify.app",
    githubUrl: `${GITHUBHOST}/comiclib-next`,
    imagePath: "../../img/clhome.png",
    stack: ["nextjs", "typescript", "tailwindcss", "supabase"],
  },
  {
    name: "Portfolio",
    description: "",
    siteUrl: "/",
    githubUrl: `${GITHUBHOST}/portfolio_v2`,
    imagePath: "",
    stack: ["vite", "javascript"],
  },
];

function generateProjectBlocks() {
  return `
		${projectsBin
      .map(
        ({ name, description, siteUrl, githubUrl, imagePath, stack }) => `
<div class="section">
	<div class="details">
		<h3>${name}</h3>
		<p class="description">
			${description}
		</p>
		<div class="badge-group">
			${generateStackBadges(stack)}
		</div>
		<div class="btn-group">
			<a href="${siteUrl}" target="_blank" rel="noreferrer" class="btn btn-tert">Visit Site</a>
			<a href="${githubUrl}" target="_blank" rel="noreferrer" class="btn">Github</a>
		</div>
	</div>
	<div class="gallery"><a href="${siteUrl}" target="_blank" rel="noreferrer"><img src="${imagePath}" /></a></div>
</div>
`
      )
      .join("")}`;
}

function generateStackBadges(stackArr) {
  return `
		${stackArr
      .map(
        (tech) => `
			<div class="badge">${tech}</div>
		`
      )
      .join("")}
	`;
}

export function initProjects() {
  const projects = generateProjectBlocks();
  projectSectionId.insertAdjacentHTML("beforeend", projects);
}
