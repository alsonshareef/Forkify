import { DOM } from './DOM';

// Grab search query from input field
export const getInput = () => DOM.searchInput.value;

// Clear search query
export const clearInput = () => {
	DOM.searchInput.value = '';
};

// Clear recipe result list
export const clearResultList = () => {
	DOM.searchResultsList.innerHTML = '';
	DOM.searchResultsPages.innerHTML = '';
};

// Sets titles length to be < 17 characters for readability.
const limitTitle = (title, limit = 17) => {
	let adjustedTitle = [];
	if (title.length > limit) {
		title.split(' ').reduce((sum, currentWord) => {
			if (sum + currentWord.length <= limit) {
				adjustedTitle.push(currentWord);
			}
			return sum + currentWord.length;
		}, 0);
		return `${adjustedTitle.join(' ')} ...`;
	}
	return title;
};

// Render each recipe into HTML
const renderRecipe = (recipe) => {
	let recipeHTML = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
	DOM.searchResultsList.insertAdjacentHTML('beforeend', recipeHTML);
};

// Creates button for pagination
const createButton = (pageNum, type) => `
	<button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? pageNum - 1 : pageNum + 1}">
		<span>Page ${type === 'prev' ? pageNum - 1 : pageNum + 1}</span>
		<svg class="search__icon">
			<use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
		</svg>
	</button>
`;

// Determines what pagination buttons should be rendered
const renderButton = (page, resultsNum, resultPerPage) => {
	const totalPages = Math.ceil(resultsNum / resultPerPage);
	let button;
	if (page === 1 && totalPages > 1) {
		// If on first page, show only next page button
		button = createButton(page, 'next');
	} else if (page === totalPages && totalPages > 1) {
		// If on last page, show only previous page button
		button = createButton(page, 'prev');
	} else if (page < totalPages) {
		// If somewhere inbetween, show previous and next page button
		button = `
			${createButton(page, 'prev')}
			${createButton(page, 'next')}
		`;
	}
	DOM.searchResultsPages.insertAdjacentHTML('afterbegin', button);
};

// Render recipe HTML elements and respective pagination buttons onto UI
export const renderResults = (recipes, page = 1, resultPerPage = 10) => {
	// Renders recipes for the current page.
	const start = (page - 1) * resultPerPage;
	const end = page * resultPerPage;
	recipes.slice(start, end).forEach(renderRecipe);

	// Renders pagination buttons for current page.
	renderButton(page, recipes.length, resultPerPage);
};
