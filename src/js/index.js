// Global app controller

// Models
import Search from './models/Search';

// Views
import { DOM_elements } from './views/DOM_elements';
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

		// Search for recipes with new Search object method
		await state.search.getResults();

		// Render results on UI
		searchView.renderResults(state.search.recipes);
	}
};

// Listens for submission of search input, and runs callback to handle search query.
DOM_elements.searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	controlSearch();
});
