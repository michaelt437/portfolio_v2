const GITHUBHOST = "https://github.com/michaelt437";

function generateFooter() {
  return ` 
		<p class="description">
			Made with vite and js 
		</p>
			<a href="${GITHUBHOST}/portfolio_v2" target="_blank" rel="noreferrer" class="btn btn-dark-gray">Github</a>
			</div>
`;
}

export function initFooter () {
	const footer = generateFooter();
	document.getElementById("footer").insertAdjacentHTML("beforeend", footer);
}

