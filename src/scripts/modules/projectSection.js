import imgMovieNights from "../../img/mnhome.png";
import imgComicsLib from "../../img/clhome.png";

const projectSectionId = document.querySelector("#projects");

const GITHUBHOST = "https://github.com/michaelt437";

const projectsBin = [
  {
    name: "Movie Nights Roulette",
    description:
      "Using data from The Movie Database (TMDB), I built this application to easily manage a pool of movie choices and let fate decide tonight's movie with the press of a button. Currently using Vue 2, but eventually I will migrate to Vue 3.",
    siteUrl: "https://movienights.netlify.app",
    githubUrl: `${GITHUBHOST}/movie-nights-pwa`,
    imagePath: imgMovieNights,
    stack: ["vue", "typescript", "tailwindcss", "firestore"],
  },
  {
    name: "Comics Library",
    description:
      "This CRUD application helps me keep track of my comic books - books I have, books I've read, keep a wishlist. I use this project to learn React and to try out a Firebase alternative called Supabase.",
    siteUrl: "https://comicslib.netlify.app",
    githubUrl: `${GITHUBHOST}/comiclib-next`,
    imagePath: imgComicsLib,
    stack: ["nextjs", "typescript", "tailwindcss", "supabase"],
  },
];

function generateProjectBlocks() {
  return `
		${projectsBin
      .map(
        ({ name, description, siteUrl, githubUrl, imagePath, stack }) => `
<div class="section" data-sal="slide-up" data-sal-duration="700">
	<div class="halo"></div>
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
	<div class="gallery">
					<a href="${siteUrl}" target="_blank" rel="noreferrer"><img src="${imagePath}" /></a></div>
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
