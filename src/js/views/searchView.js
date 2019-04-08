import { DOM_elements } from "./DOM_elements";

// Grab search query from input field 
export const getInput = () => DOM_elements.searchInput.value

// Render each recipe into HTML
const renderRecipe = recipe => {
    let recipeHTML = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `
    DOM_elements.searchResultsList.insertAdjacentHTML('beforeend', recipeHTML)
}

// Render recipe HTML elements onto UI
export const renderResults = recipes => recipes.forEach(renderRecipe)

// Clear search query
export const clearInput = () => {
    DOM_elements.searchInput.value = ''
}

// Clear recipe result list
export const clearResultList = () => {
    DOM_elements.searchResultsList.innerHTML = ''
}
