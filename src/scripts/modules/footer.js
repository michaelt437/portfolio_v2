function generateFooter() {
  return ` 
		<p class="description">
			<a href="mailto:michaelt437@gmail.com">michaelt437@gmail.com</a>
		</p>
`;
}

export function initFooter() {
  const footer = generateFooter();
  document.getElementById("footer").insertAdjacentHTML("beforeend", footer);
}
