// Storing DOM elements and other reusable components for easier maintenance and readability.

// DOM elements
export const DOM = {
	searchForm: document.querySelector('.search'),
	searchInput: document.querySelector('.search__field'),
	results: document.querySelector('.results'),
	searchResultsList: document.querySelector('.results__list'),
	searchResultsPages: document.querySelector('.results__pages')
};

// Class names to add dynamically instead of hard coding
export const elementClasses = {
	loader: 'loader'
};

// Add loading animation
export const renderLoader = (parent) => {
	const loader = `
		<div class="${elementClasses.loader}">
			<svg>
				<use href="img/icons.svg#icon-cw"></use>
			</svg>
		</div>
	`;
	parent.insertAdjacentHTML('afterbegin', loader);
};

// Clear loading animation once results have returned from API call
export const clearLoader = () => {
	let loader = document.querySelector(`.${elementClasses.loader}`);
	if (loader) {
		loader.parentElement.removeChild(loader);
	}
};
