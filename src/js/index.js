// Global app controller
const API_Key = "55f16311f10d3ef766ae41e661a3bb55"

async function getResults(query){
   try {
    let result = await fetch(`https://www.food2fork.com/api/search?key=${API_Key}&q=${query}`)
    .then(res => res.json())

    let recipes = result.recipes

    console.log(recipes)
   } catch (error) {
       alert(error)
   }
}

getResults('pizza')