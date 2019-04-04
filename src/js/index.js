// Global app controller
import Search from './models/Search'

/** Global State consists of:
     * - Search object
     * - Current Recipe object
     * - Shopping List object
     * - Liked recipes object
*/

 let state = {}

const controlSearch = async () => {
    // Get query from view
    let query = 'pizza'

    if (query) {
        // Create a new Search object storing data based on search query, and add to state.
        state.search = new Search(query)
        
        // Prepare UI for results

        // Search for recipes with new Search object method
        await state.search.getResults()

        // Render results on UI
        console.log(state.search.recipes)
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault()
    controlSearch()
})
