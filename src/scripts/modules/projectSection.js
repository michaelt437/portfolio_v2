const projectSectionId = document.querySelector("#projects");

const GITHUBHOST = "https://github.com/michaelt437";
const projectsBin = [
  {
    name: "Movie Nights Roulette",
    description: "",
    siteUrl: "https://movienights.netlify.app",
    githubUrl: `${GITHUBHOST}/movie-nights-pwa`,
  },
  {
    name: "Comics Library",
    description: "",
    siteUrl: "https://comiclib.netlify.app",
    githubtUrl: `${GITHUBHOST}/comiclib-next`,
  },
  {
    name: "Portfolio",
    description: "",
    siteUrl: "/",
    githubHost: `${GITHUBHOST}/portfolio_v2`,
  },
];

function generateProjectBlocks() {
  return `
		${projectsBin.map(
      ({ name, description, siteUrl, githubUrl }) => `
<div class="section">
	<div class="details">
		<h3>${name}</h3>
		<p class="description">
			${description}
		</p>
		<div class="btn-group">
			<a href="${siteUrl}" class="btn btn-tert">Visit Site</a>
			<a href="${githubUrl}" class="btn">Github</a>
		</div>
	</div>
	<div class="gallery"><img src="" /></div>
</div>
`
    )}`;
}

export function initProjects() {
  const projects = generateProjectBlocks();
  projectSectionId.insertAdjacentHTML("beforeend", projects);
}
