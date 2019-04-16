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

// Render recipe HTML elements onto UI
export const renderResults = (recipes) => recipes.forEach(renderRecipe);
