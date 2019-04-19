// Global app controller

// Models
import Search from './models/Search';

// Views
import { DOM, renderLoader, clearLoader } from './views/DOM';
import * as searchView from './views/searchView';

/** Global State consists of:
 * - Search object
 * - Current Recipe object
 * - Shopping List object
 * - Liked recipes object
*/

let state = {};

// Handles search field and what happens with the input.
const controlSearch = async () => {
	// Get search query from view
	let query = searchView.getInput();
	if (query) {
		// Create a new Search object storing data based on search query, and add to state.
		state.search = new Search(query);

		// Prepare UI for results
		searchView.clearInput();
		searchView.clearResultList();
		renderLoader(DOM.results);

		// Search for recipes with new Search object method
		await state.search.getResults();

		// Render results on UI
		clearLoader();
		searchView.renderResults(state.search.recipes);
	}
};

// Listens for submission of search input, and runs callback to handle search query.
DOM.searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	controlSearch();
});

// Listens for clicks on pagination buttons, clears UI and renders respective recipes and buttons.
DOM.searchResultsPages.addEventListener('click', (e) => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = Number(btn.dataset.goto);
		searchView.clearResultList();
		searchView.renderResults(state.search.recipes, goToPage);
	}
});
